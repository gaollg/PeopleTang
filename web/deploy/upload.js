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

console.log('开始压缩dist目录...');
startZip();

// 压缩dist目录为public.zip
function startZip() {
  var archive = archiver('zip', {
    zlib: {
      level: 8,
    },
  }).on('error', function (err) {
    throw err; // 压缩过程中如果有错误则抛出
  });
  var output = fs.createWriteStream(__dirname + '/public.zip').on('close', function (err) {
    /* 压缩结束时会触发close事件，然后才能开始上传，
        否则会上传一个内容不全且无法使用的zip包 */
    if (err) {
      console.log('关闭archiver异常:', err);
      return;
    }
    console.log('已生成zip包');
    console.log('开始上传public.zip至远程机器...');
    uploadFile();
  });

  archive.pipe(output); // 典型的node流用法
  archive.directory(srcPath, '/public'); // 将srcPach路径对应的内容添加到zip包中/public路径
  archive.finalize();
}

// 将dist目录上传至正式环境
function uploadFile() {
  ssh
    .connect({
      // config存放的是连接远程机器的信息
      host: config.host,
      username: config.username,
      password: config.password,
      port: config.port, // SSH连接默认在22端口
    })
    .then(function () {
      console.log('SSH 连接成功');
      // 上传网站的发布包至config中配置的远程服务器的指定地址
      ssh
        .putFile(__dirname + '/public.zip', config.backupDIR + `/` + helper.getVersion() + `.zip`)
        .then(function (status) {
          console.log('上传文件成功');
          removeLocalFile(); // 删除本地文件
        })
        .catch((err) => {
          console.log('文件传输异常:', err);
          process.exit(0);
        });
    })
    .catch((err) => {
      console.log('ssh连接失败:', err);
      process.exit(0);
    });
}

// 完成操作后删除本地的打包文件
function removeLocalFile() {
  fs.unlink(__dirname + '/public.zip', function (error) {
    if (error) {
      console.log(error);
      return false;
    }
    console.log('删除文件成功');
    process.exit(0);
  });
}
