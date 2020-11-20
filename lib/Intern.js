const Employee = require("./Employee");


// Extend employee class

// constructor function for Intern Class to be exported to htmlRender.js and App.js

class Intern extends Employee {
    constructor(name,email,id,github){
        //super to pull in Employee code
        super(name,email,id);
        this.role ="Intern";
        this.school = school;
    }
// function for rendering getSchool (everything else is extended)
getSchool(){
 return this.school;
}

}
//export 

module.exports = Intern;
