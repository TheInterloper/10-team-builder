const Engineer = require('../lib/engineer')

describe('github constructor', () => {
  it('Set github constructor', () => {
    const github = 'githubUserName'
    const newEmployee = new Engineer('Bob', 4, 'bob@example.com', github)
    expect(newEmployee.github).toBe(github);
  })

  describe('getTitle()', () => {
    it('Get title', () => {
      const title = 'Engineer';
      const newEmployee = new Engineer('Bob', 4, 'bob@example.com', "githubUser")
      expect(newEmployee.getEmployeeTitle()).toBe(title);
    })
  })

  describe('get github()', () => {
    it('Get Github Username', () => {
      const github = 'githubUsername'
      const newEmployee = new Engineer('Bob', 4, 'bob@example.com', github)
      expect(newEmployee.gitHubInfo()).toBe(github)
    })
  })
})