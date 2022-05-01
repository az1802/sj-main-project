#!/usr/bin/env node

let commandLib = require('sjtestlib');
console.log('commandLib: ', commandLib);
console.log("hello sj-aaa")
const process = require('process');
console.log('process: ', process.argv);
let command = process.argv[2]
console.log('command: ', command);

if (commandLib[command]) {
  commandLib[command]()
} else {
  console.log(`${command} 指令不存在`)
}