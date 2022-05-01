 function add(a, b) {
   return a + b;
 }


 function mul(a, b) {
   console.log('执行mult指令')
   return a * b
 }

 function init() {
   console.log('执行init指令')
 }


 module.exports = {
   add,
   mul,
   init
 }