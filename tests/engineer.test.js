const Engineer = require('../lib/engineer')

describe('getTitle()', () => {
  it('Get title', () => {
    const title = 'Engineer';
    const newEmployee = new Employee('Bob', 4, 'bob@example.com', title)
    expect(newEmployee.getTitle()).toBe(title);
  })
})

describe('get github()', () => {
  it('Get Github Username', () => {
    const github = 'githubUsername'
    const newEmployee = new Engineer('Bob', 4, 'bob@example.com', github)
    expect(newEmployee.github()).toBe(github)
  })
})