// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
      {
        type: 'input',
        name: 'title',
        message: 'Enter project title',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter project Description',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter Installation instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter Usage information',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter Contribution information',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter Test information',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select License information',
        choices:["MIT", "No license",]
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter Github username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter Email address',
      },
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

// TODO: Create a function to initialize app
function init(){
  promptUser()
    .then((answers) => fs.writeFileSync("README.md", generateMarkdown(answers)))
    .then(() => console.log('Successfully created README'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
