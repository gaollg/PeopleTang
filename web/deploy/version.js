let helper = require("./helper");

var run = async () => {
  helper.newVersion();
  await helper.pushToGithub();
  console.log("版本修改成功");
  process.exit(0);
}
run();

