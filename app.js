const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
// write files asynchronisly
const util = require("util");
const writeFileSync = util.promisify(fs.writeFile);

// employee data storage
const employees =[];

// program


// add Engineer
// add Intern
// write team


const managerQuestions = () => {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "name",
                message: "Enter the Manager name"
            },
            {
                type: "input",
                name: "email",
                message: "Enter the Manager email"
            },
            {
                type: "input",
                name: "id",
                message: "Enter the Manager id"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter your Manager office number"
            }
        ]).then(function(response) {
            employee = new Manager(response.name, response.email, response.id, response.officeNumber);
            employees.push(employee);
        }
    )
}

const engineerQuestions = () => {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "name",
                message: "Enter the Engineer name"
            },
            {
                type: "input",
                name: "email",
                message: "Enter the Engineer email"
            },
            {
                type: "input",
                name: "id",
                message: "Enter the Engineer id"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "Enter your Engineer Github address"
            }
        ]).then(function(response) {
            employee = new Engineer(response.name, response.email, response.id, response.github);
            employees.push(employee);
        });
}



const init = () => {
    console.log("Welcome to the Employee Template Engine");
    managerQuestions();
    engineerQuestions();
