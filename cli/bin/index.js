#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");

const options = yargs 
 .usage("Usage: -n <name>")
 .option("n", { alias: "name", describe: "Your name", type: "String", demandOption: true})
 .argv;
 const greeting = chalk.white.bold('Hello', options.name);


const boxenOpetions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
};
const msgbox = boxen(greeting, boxenOpetions, );
console.log(msgbox);
//console.log("Hello Aaditya");
