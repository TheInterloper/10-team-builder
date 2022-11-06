const Employee = require('../lib/employee');

class Intern extends Employee {
  constructor(name, id, email, school){
    super(name, id, email );
    
    this.school = school
    this.title = 'intern'
  }
  schoolInfo(){
    return this.school
  }
}







module.exports = Intern;