const Manager = require('../lib/manager')

describe('Office number constructor', () => {
  it('Set office number', () => {
    const officeNumber = 6
    const newEmployee = new Manager('Bob', 4, 'bob@example.com', officeNumber)
    expect(newEmployee.officeNum).toBe(officeNumber);
  })

  describe('getTitle()', () => {
    it('Get title', () => {
      const title = 'Manager';
      const newEmployee = new Manager('Bob', 4, 'bob@example.com', "officeNumber")
      expect(newEmployee.getEmployeeTitle()).toBe(title);
    })
  })

  describe('get officeNumber()', () => {
    it('Get office number', () => {
      const officeNumber = 10
      const newEmployee = new Manager('Bob', 4, 'bob@example.com', officeNumber)
      expect(newEmployee.getOfficeNumber()).toBe(officeNumber)
    })
  })
})