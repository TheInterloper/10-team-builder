const manager = require('../lib/manager')

describe('getTitle()', () => {
    it('Get title', () => {
      const title = 'Manager';
      const newEmployee = new Employee('Bob', 4, 'bob@example.com', title)
      expect(newEmployee.getTitle()).toBe(title);
    })
  })
  
  describe('get officeNumber()', () => {
    it('Get office number', () => {
      const officeNumber = 10
      const newEmployee = new Manager('Bob', 4, 'bob@example.com', officeNumber)
      expect(newEmployee.officeNumber()).toBe(officeNumber)
    })
  })