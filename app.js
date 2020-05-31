const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function promptUser() {
    return inquirer.prompt([
    {
        type: "input",
        message: "Enter your first name:",
        name: "name"
    }, {
        type: "input",
        message: "Enter your email address:",
        name: "email"
    }, {
        type: "input",
        message: "What's your role within the company?",
        name: "role",
        choices: ['engineer', 'intern', 'manager']
    },
    {
        type: "input",
        message: "Enter your github username:",
        name: "username"
    }, ]);
}
