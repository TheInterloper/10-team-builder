const Employee = require('../lib/employee');

class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name, id, email );
    
    this.github = github
    this.title =  'engineer'
  }
  gitHubInfo() {
    return this.github
  }
}







module.exports = Engineer;