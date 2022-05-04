#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
var shell = require('python-shell');
const spawn = require('child_process').spawn;
var fs = require('fs');

var uint8arrayToString = function(data){
    return String.fromCharCode.apply(null, data);
};
var script = "D:\\codes\\cli_scripts\\empty.py";
var exec = "python.exe"
const scriptexec = spawn(exec, [script]);
scriptexec.stderr.on('data', (data) =>{
    console.log(uint8arrayToString(data));
});
scriptexec.stdout.on('data', (data) => {
    console.log(uint8arrayToString(data));
});
scriptexec.on('exit', (code) => {
    if(code == 0)
    console.log("Downloads folder cleared successfully");
    else
    console.log('Process quit with code : ' + code);
});
// shell.PythonShell.run('D:\codes\empty.py', null, function(err){
//     if(err) throw err;
//     console.log('Format complete!');
// });
// shell.PythonShell.runString('x=1+1;print(x)', null, function (err) {
//     if (err) throw err;
//     console.log('finished');
//   });
//shell.PythonShell.runString('x=x+1; print(x)',)
    // const options = yargs 
    // .usage("Usage: -n <name>")
    // .option("n", { alias: "name", describe: "Folder name", type: "String", demandOption: true})
    // .argv;
const greeting = chalk.white.bold('Folder deleted');


const boxenOpetions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
};
const msgbox = boxen(greeting, boxenOpetions, );
//console.log(msgbox);
//console.log("Hello Aaditya");
