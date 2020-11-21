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
const fileWriter = util.promisify(fs.writeFile);

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
                message: "Enter the Engineer Github address"
            }
        ]).then(function(response) {
            employee = new Engineer(response.name, response.email, response.id, response.github);
            employees.push(employee);
        });
}

const internQuestions = () => {
    inquirer.prompt(
        [
            {
                type: "input",
                name: "name",
                message: "Enter the Intern name"
            },
            {
                type: "input",
                name: "email",
                message: "Enter the Intern email"
            },
            {
                type: "input",
                name: "id",
                message: "Enter the Intern id"
            },
            {
                type: "input",
                name: "school",
                message: "Enter the Intern school"
            }
        ]).then(function(response) {
            employee = new Intern(response.name, response.email, response.id, response.school);
            employees.push(employee);
        });
}

async function renderEmployee(){
    const renderEmployees = render(employees);
    await fileWriter(outputPath, renderEmployees);
}


const init = () => {
    console.log("Welcome to the Employee Template Engine");
    managerQuestions();
    engineerQuestions();
    internQuestions();
    renderEmployee();
}

//start the program
init();
