
// Employee: name, ID, email


class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = 'Employee'
  }

  getEmployeeName() {
    return this.name
  }
  getEmployeeId() {
    return this.id;
  }
  getEmployeeEmail() {
    return this.email;
  }
  getEmployeeTitle() {
    return this.title
  }
}



module.exports = Employee;