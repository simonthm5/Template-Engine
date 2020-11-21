// contructor function for Employee Class to be exdported to htmlRender.js and App.JS

// this will also extend to Engineer, Intern, Manager roles

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    
        this.role = "Employee";}

        //for rendering on htmlRender.js
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
    }

    // export
    module.exports = Employee;

