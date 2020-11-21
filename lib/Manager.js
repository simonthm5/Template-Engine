const Employee = require("./Employee");


// Extend employee class

// constructor function for Manage Class to be exported to htmlRender.js and App.js

class Manager extends Employee {
    constructor(name,email,id,officeNumber){
        //super to pull in Employee code
        super(name,email,id);
        this.role ="Manager";
        this.officeNumber = officeNumber;
    }
// function for rendering getOfficeNumber (everything else is extended)
getOfficeNumber(){
 return this.officeNumber;
}

}
//export 

module.exports = Manager;
