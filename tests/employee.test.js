const Employee = require('../lib/employee')

describe('Create new employee', () => {

  it('Generate new employee', () => {
    const newEmployee = new Employee();
    expect(typeof (newEmployee)).toBe('object');
  })

  it('Set employee name', () => {
    const name = 'Bob';
    const newEmployee = new Employee(name)
    expect(newEmployee.name).toBe(name);
  })

  it('Set employee ID', () => {
    const id = 4;
    const newEmployee = new Employee('Bob', id)
    expect(newEmployee.id).toBe(id);
  })

  it('Set employee email', () => {
    const email = 'bob@example.com';
    const newEmployee = new Employee('Bob', 4, email)
    expect(newEmployee.email).toBe(email);
  })

  describe('getEmployeeName()', () => {
    it('Get employee name', () => {
      const name = 'Bob';
      const newEmployee = new Employee(name)
      expect(newEmployee.getEmployeeName()).toBe(name);
    })
  })

  describe('getEmployeeId()', () => {
    it('Get employee id', () => {
      const id = 4;
      const newEmployee = new Employee('Bob', id)
      expect(newEmployee.getEmployeeId()).toBe(id);
    })
  })

  describe('getEmployeeEmail()', () => {
    it('Get employee email', () => {
      const email = 'bob@example.com';
      const newEmployee = new Employee('Bob', 4, email)
      expect(newEmployee.getEmployeeEmail()).toBe(email);
    })
  })

  describe('getEmployeeTitle()', () => {
    it('Get employee title', () => {
      const title = 'Employee';
      const newEmployee = new Employee('Bob', 4, 'bob@example.com', title)
      expect(newEmployee.getEmployeeTitle()).toBe(title);
    })
  })
})