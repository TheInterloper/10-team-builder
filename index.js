const inquirer = require('inquirer');
const fs = require('fs');
const userData = require('./public/htmlinfo')
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// inquirer answers pushed to this array
let team = []

//Write HTML file

function writeToFile(team) {
  const responses = userData(team)
  // const responses = createTeamBadge(team)
  fs.writeFile('./dist/index.html', responses, (err) =>
    err ? console.log("error") : console.log('HTML page created!'))
}

//Terminal prompts for cards

//Employee: name, ID, email
//Manager: name, ID, email, office number
//Engineer: name, ID, email, gitHub
//Intern: name, ID, email, school



async function empAdd() {
  return inquirer
    .prompt([
      {
        type: 'list',
        message: 'What team member type are you adding?',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern'],
      },
      {
        type: 'input',
        message: 'What is the team members name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the team members ID number?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is the team members email?',
        name: 'email',
      }
    ])
}

//Funcs for case based responses
function managerRole() {
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the managers office number?',
        name: 'officeNum',
      }
    ])
}

function engineerRole() {
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the engineers GitHub URL?',
        name: 'github',
      }
    ])
}

function internRole() {
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the interns school name?',
        name: 'school',
      }
    ])
}

function additonalEmployee() {
  return inquirer
    .prompt([
      {
        type: 'confirm',
        message: 'Would you like to add another employee?',
        name: 'add',
      }
    ])
}

async function init() {
  let addMore = true

  while (addMore) {
    let data = await empAdd();

    if (data.role === 'Manager') {
      const { officeNum } = await managerRole()
      team.push(new Manager(data.name, data.id, data.email, officeNum))

    } else if (data.role === 'Engineer') {
      const { github } = await engineerRole()
      team.push(new Engineer(data.name, data.id, data.email, github))

    } else {
      const { school } = await internRole()
      team.push(new Intern(data.name, data.id, data.email, school))
    }

    let answer = await additonalEmployee()

    if (!answer.add) {
      addMore = false
    }
  }

  writeToFile(team)

}
init()
