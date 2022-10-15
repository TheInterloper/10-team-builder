const inquirer = require('inquirer');
const fs = require('fs');
const userData = require('./lib/htmlinfo');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const team = []


//Write HTML file

function writeToFile(data) {
  fs.writeFile('./dist/index.html', data, (err)=>
    err ? console.log("error") : console.log('HTML created!'))
}

//Terminal prompts for cards

//Employee: name, ID, email
//Manager: name, ID, email, office number
//Engineer: name, ID, email, gitHub
//Intern: name, ID, email, school

// const test = new Engineer ('tyler', '7', 'testemail', 'githubname')
// console.log(test)


async function empAdd(){
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
function managerRole(){
  return inquirer
  .prompt([
    {
      type: 'input',
      
      message: 'What is the managers office number?',
      
      name: 'officeNum',
    }
  ])
}

function engineerRole(){
  return inquirer
  .prompt([
    {
      type: 'input',
      
      message: 'What is the engineers GitHub URL?',
      
      name: 'github',
    }
  ])
}

function internRole(){
  return inquirer
  .prompt([
    {
      type: 'input',
      
      message: 'What is the interns school name?',
      
      name: 'school',
    }
  ])
}

function additonalEmployee(){
  return inquirer
  .prompt([
    {
      type: 'confirm',
      
      message: 'Would you like to add another employee?',
      
      name: 'add',
    }
  ])
}

async function init(){
  let addMore = true

  while (addMore) {
    let data = await empAdd();

    if (data.role === 'Manager'){
      await managerRole()
    
    } else if (data.role === 'Engineer'){
      await engineerRole()

    } else {
      await internRole()
    } 

    let answer = await additonalEmployee()

    if (!answer.add){
      addMore = false
    }
  }

  writeToFile(team)
console.log(team)
}


init()
