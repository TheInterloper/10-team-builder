const Intern = require('../lib/intern')

describe('School Name', () => {
  it('Set school name', () => {
    const school = 'Hardknocks'
    const newEmployee = new Intern('Bob', 4, 'bob@example.com', school)
    expect(newEmployee.school).toBe(school);
  })

  describe('getTitle()', () => {
    it('Get title', () => {
      const title = 'Intern';
      const newEmployee = new Intern('Bob', 4, 'bob@example.com', 'schoolName')
      expect(newEmployee.getEmployeeTitle()).toBe(title);
    })
  })

  describe('getSchool()', () => {
    it('Get School', () => {
      const school = 'schoolName'
      const newEmployee = new Intern('Bob', 4, 'bob@example.com', school)
      expect(newEmployee.schoolInfo()).toBe(school)
    })
  })
})