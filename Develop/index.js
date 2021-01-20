// Required Node modules
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt(
        {
            type: 'input',
            message: 'What is the title of the application?',
            name: 'title',
            // Validation check to ensure user does not miss any necessary inputs
            validate: (value)=> {if (value){ return true} 
            else {return 'We need a value here to proceed.'}}
        },
        {
            type: 'input',
            message: 'What is the description of the application?',
            name: 'description',
            // Validation check to ensure user does not miss any necessary inputs
            validate: (value)=> {if (value){ return true} 
            else {return 'We need a value here to proceed.'}}
        },
        {
            type: 'input',
            message: 'What are the installation instructions?',
            name: 'installation',
            // Validation check to ensure user does not miss any necessary inputs
            validate: (value)=> {if (value){ return true} 
            else {return 'We need a value here to proceed.'}}
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines?',
            name: 'contributions',
            // Validation check to ensure user does not miss any necessary inputs
            validate: (value)=> {if (value){ return true} 
            else {return 'We need a value here to proceed.'}}
        },
        {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'instructions',
            // Validation check to ensure user does not miss any necessary inputs
            validate: (value)=> {if (value){ return true} 
            else {return 'We need a value here to proceed.'}}
        },
        {
            type: 'input',
            message: 'How do you start and use the application?',
            name: 'usage',
            // Validation check to ensure user does not miss any necessary inputs
            validate: (value)=> {if (value){ return true} 
            else {return 'We need a value here to proceed.'}}
        },
        {
            type: 'list',
            message: 'Which license was used?',
            name: 'license',
            choices: ['MIT','test','test','test','test'],
            // Validation check to ensure user does not miss any necessary inputs
            validate: (value)=> {if (value){ return true} 
            else {return 'We need a value here to proceed.'}}
        },
        {
            type: 'input',
            message: 'What is your github?',
            name: 'github',
            // Validation check to ensure user does not miss any necessary inputs
            validate: (value)=> {if (value){ return true} 
            else {return 'We need a value here to proceed.'}}
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
            // Validation check to ensure user does not miss any necessary inputs
            validate: (value)=> {if (value){ return true} 
            else {return 'We need a value here to proceed.'}}
        }
    )
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();