const Intern = require('../lib/intern')

describe('getTitle()', () => {
    it('Get title', () => {
      const title = 'Intern';
      const newEmployee = new Employee('Bob', 4, 'bob@example.com', title)
      expect(newEmployee.getTitle()).toBe(title);
    })
  })

  describe('getSchool()', () => {
    it('Get School', () => {
      const school = 'schoolName'
      const newEmployee = new Intern('Bob', 4, 'bob@example.com', school)
      expect(newEmployee.getSchool()).toBe(school)
    })
  })