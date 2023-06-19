const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
var readline = require('readline');
const { resolve } = require('path');

let workspace = path.resolve(__dirname, '../');

var O = {};
O.cmdInput = (handle) => {
  if (!handle) {
    handle = () => true;
  }
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    //line就是一行的数据
    rl.on('line', function (line) {
      if (handle(line)) {
        rl.close();
        resolve(line.trim());
      }
    });
  });
};

/**
 * 获取得 CMD 所有参数
 * @returns
 */
O.getParams = () => {
  const map = {};
  process.argv.forEach((item) => {
    let index = item.indexOf('=');
    if (index == -1) {
      return;
    }
    map[item.substring(0, index)] = item.substring(index + 1);
  });
  return map;
};

/**
 * 读取 CMD 配置
 * @returns
 */
O.readConfig = () => {
  const params = O.getParams();
  let publicFile = path.resolve(__dirname, params.config);
  var data = JSON.parse(fs.readFileSync(publicFile, 'utf-8'));
  return data;
};

/**
 * 取得当前版本
 * @returns
 */
O.getVersion = () => {
  let publicFile = path.resolve(__dirname, '../public/version.json');
  var data = JSON.parse(fs.readFileSync(publicFile, 'utf-8'));
  return data.version;
};

/**
 * 新版本
 */
O.newVersion = () => {
  let publicFile = path.resolve(__dirname, '../public/version.json');

  var data = JSON.parse(fs.readFileSync(publicFile, 'utf-8'));
  var v = parseFloat(data.version) + 0.01;
  data.version = v.toFixed(2);
  data.releaseAt = Date.now();

  var text = JSON.stringify(data, null, 2);

  var res = fs.writeFileSync(publicFile, text, { encoding: 'utf8' });
  if (res) {
    console.log('版本更新出错', res);
  } else {
    console.log('版本更新成功', text);
  }
};

/** 推送到 github */
O.pushToGithub = () => {
  return new Promise((resolve, reject) => {
    var version = O.getVersion();
    var cmd = `git pull && git add . && git commit -m "auto deploy v${version}" && git push origin`;
    cmd = cmd + ` && git tag v${version} && git push origin v${version}`;
    console.log('git push code: ' + cmd);
    exec(cmd, { cwd: workspace }, (err, stdout, stderr) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      resolve();
    });
  });
};

module.exports = O;
