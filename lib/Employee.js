// contructor function for Employee Class to be exdported to htmlRender.js and App.JS

// this will also extend to Engineer, Intern, Manager roles

class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = "Employee";}

        //for rendering on htmlRender.js
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getID(){
        return this.id;
    }
    getRole(){
        return this.email;
    }
    }

    // export
    module.exports = Employee;

