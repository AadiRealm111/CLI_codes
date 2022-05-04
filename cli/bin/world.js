#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.white.bold("Hello Aaditya!");

const boxenOpetions = {
    padding: 3,
    margin: 5,
    borderStyle: "round",
    borderColor: "red",
    backgroundColor: "#111111"
};
const msgbox = boxen(greeting, boxenOpetions, );
console.log(msgbox);
//console.log("Hello Aaditya");
