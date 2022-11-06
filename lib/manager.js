const Employee = require('../lib/employee');

class Manager extends Employee {
  constructor(name, id, email, officeNum){
    super(name, id, email );
    
    this.officeNum = officeNum
    this.title = 'Manager'
  }
  mangerInfo(){
    return this.officeNum;
  }
}






module.exports = Manager;