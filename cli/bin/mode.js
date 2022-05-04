#!/usr/bin/env node

const yargs = require("yargs");
var fs = require('fs');
var exec = require('child_process').execFile;


const options = yargs 
 .usage("Usage: -m <mode>")
 .option("m", { alias: "mode", describe: "mode in which you want to work", type: "String", demandOption: true})
 .argv;

if(options.mode == "code")
{
  var fun = function() {
    exec('C:\\Program Files\\Microsoft VS Code\\code.exe', function(err, data){
      if(err)
      console.log("Error in running the program");
      else
      console.log("Visual Studio Code running!!");
    });
  }
  fun();

}