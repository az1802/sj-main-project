#!/usr/local/bin/node
// #!/usr/bin/env node

/**
 * 1 文件必须是可执行文件,可以通过chmod 777 baseCli.js修改文件为可执行文件
 * 2 头部必须有该文件执行的解释器路径
 *  路径可以是node的具体路径 可以通过which node 进行查询,也可以是env  通过which查询本地node的路径
 * 3 运行脚本时候需要带有相对路径否则无法在全局查找到具体指令
 *  可以用过增加软连接将指令添加到全局的环境变量中
 *  ln -s /Users/m1pro/Desktop/mine/sj-main-project/cliProject/baseCli/baseCli.js baseCli
 * 
 * node 本身就是一个客户端   node baseCli.js 就是文件内容转换为字符串给node执行
 * node -e 'console.log(__dirname)'  可以执行代码
 * node本质上与pc上安装的软件没有区别
 * 
 * 
 * 软连接可以给脚手架指令创建别名
 * 
 * 
 * npm link  调试脚手架
 * 
 */

function add(){
  return 10;
}
exports.add = add;

console.log('sj-base 脚手架',__dirname)
