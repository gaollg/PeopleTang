const path = require('path');
const archiver = require('archiver');
const fs = require('fs');
const { NodeSSH } = require('node-ssh');
const ssh = new NodeSSH();
const srcPath = path.resolve(__dirname, '../dist');
let helper = require('./helper');

let config = helper.readConfig();
console.log('server config:', JSON.stringify(config, null, 2));
// let config = {
//   cwd: "",
//   host: "",
//   username: "",
//   password: "",
//   port: 22,
//   domain: ""
// };

let handleVersion = async () => {
  let rs = await ssh.execCommand('ls  | grep ".zip"', {
    cwd: config.backupDIR,
  });
  let array = rs.stdout.split('\n').reverse();
  console.log('server version: ', array.join(' '));

  let param = helper.getParams();
  let defaultVersion = '';
  if (array.length > 0) {
    defaultVersion = array[0].substring(0, array[0].length - 4);
  }
  let version = '';
  if (param.v == 'max') {
    version = defaultVersion;
  }
  if (!version) {
    console.log(`Please input version(${defaultVersion}):`);
    let temp = await helper.cmdInput();
    if (temp) {
      version = temp;
    } else {
      version = defaultVersion;
    }
  }

  if (!version) {
    throw '没有可用版本';
  }
  console.log('Use version: ', version);

  await ssh.execCommand(
    `rm -rf temp
  wait
  unzip ${version}.zip -d temp`,
    {
      cwd: config.backupDIR,
    }
  );
  return version;
};

let handleHtml = async (version) => {
  let rs = await ssh.execCommand(`cat temp/public/index.html`, {
    cwd: config.backupDIR,
  });
  let str = rs.stdout;
  let startIndex = str.indexOf('BENI-CONFIG-START');
  let endIndex = str.indexOf('BENI-CONFIG-END', startIndex);
  if (startIndex == -1 || endIndex == -1) {
    throw 'index.html config placeholder error';
  }

  let replaceHtml = fs.readFileSync(path.resolve(__dirname, config.siteConfigPath), 'utf-8');

  let resultHtml = str.substring(0, startIndex) + ' BENI-CONFIG-START -->\n';
  resultHtml += replaceHtml;
  resultHtml += `\n<script>\nwindow._deploy_version = "${version}";\nwindow._deploy_at = ${Date.now()};\n</script>\n`;
  resultHtml += '<!-- ' + str.substring(endIndex);

  resultHtml = resultHtml.replace(/'/gm, '"');

  //写入
  await ssh.execCommand(
    `echo '${resultHtml}' > temp/public/index.html
  wait`,
    {
      cwd: config.backupDIR,
    }
  );
};

let deployToSite = async () => {
  let dir = config.siteDIR;
  let cmd = `rm -rf public
  wait
  cp -r ${config.backupDIR}/temp/* ${dir}`;
  let rs = await ssh.execCommand(cmd, {
    cwd: dir,
  });
};

var start = async () => {
  await ssh.connect({
    // config存放的是连接远程机器的信息
    host: config.host,
    username: config.username,
    password: config.password,
    port: config.port, // SSH连接默认在22端口
  });
  let version = await handleVersion();
  await handleHtml(version);
  await deployToSite();

  console.log('完成');
  process.exit(0);
};

start();
