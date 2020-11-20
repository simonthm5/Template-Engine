const Employee = require("./Employee");


// Extend employee class

// constructor function for Engineer Class to be exported to htmlRender.js and App.js

class Engineer extends Employee {
    constructor(name,email,id,github){
        //super to pull in Employee code
        super(name,email,id);
        this.role ="Engineer";
        this.github = github;
    }
// function for rendering getGithub (everything else is extended)
getGithub(){
    return this.github;
}

}
//export 

module.exports = Engineer;
