#!/usr/bin/env node

const figlet = require("figlet");
const box = require("boxen");
const chalk = require("chalk");

figlet.text("                                                           NPX V-CARD", (err, data) => {
  
    console.log(chalk.blue.bold(data) + "\n" + box(chalk.blue.bold("                        STEVE DOSSIN \n")+
    chalk.blue.bold("               Junior Web Developer @Becode \n \n")+
    chalk.blue.underline("LinkedIn:") + chalk.white(" https://www.linkedin.com/in/steve-dossin-32467a12b\n\n") +
    chalk.blue.underline("GitHub:") + chalk.white (" https://github.com/Stev07\n\n") +
    chalk.blue.underline("Npm:") + chalk.white (" https://www.npmjs.com/~stevoxxx\n\n")+
    chalk.blue.underline("Email:") + chalk.white (" steve.dossin@gmail.com"), 
    {
        borderColor: "white",
        borderStyle: "single-double",
        float: "center",
        padding: 2
    }));
});