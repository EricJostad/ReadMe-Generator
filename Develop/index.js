// Required Node modules
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// // TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the application?',
        name: 'title',
        // Validation check to ensure user does not miss any necessary inputs
        validate: (value) => {
            if (value) { return true }
            else { return 'Please specify a title for your application.' }
        }
    },
    {
        type: 'input',
        message: 'What is the description of the application?',
        name: 'description',
        // Validation check to ensure user does not miss any necessary inputs
        validate: (value) => {
            if (value.length > 10) { return true }
            else { return 'Please provide a bit more detail.' }
        }
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
        // Validation check to ensure user does not miss any necessary inputs
        validate: (value) => {
            if (value.length > 10) { return true }
            else { return 'Please provide a bit more detail.' }
        }
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contributions',
        // Validation check to ensure user does not miss any necessary inputs
        validate: (value) => {
            if (value.length > 10) { return true }
            else { return 'Please provide a bit more detail.' }
        }
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'instructions',
        // Validation check to ensure user does not miss any necessary inputs
        validate: (value) => {
            if (value.length > 10) { return true }
            else { return 'Please provide a bit more detail.' }
        }
    },
    {
        type: 'input',
        message: 'How do you start and use the application?',
        name: 'usage',
        // Validation check to ensure user does not miss any necessary inputs
        validate: (value) => {
            if (value.length > 10) { return true }
            else { return 'Please provide a bit more detail.' }
        }
    },
    {
        type: 'list',
        message: 'Which license was used?',
        name: 'license',
        choices: ['Apache', 'BSD 2-Clause', 'BSD 3-Clause', 'GPLv2', 'GPLv3', 'MIT', 'Mozilla'],
        // Validation check to ensure user does not miss any necessary inputs
        validate: (value) => {
            if (value) { return true }
            else { return 'Please select a license.' }
        }
    },
    {
        type: 'input',
        message: 'What is your github?',
        name: 'github',
        // Validation check to ensure user does not miss any necessary inputs
        validate: (value) => {
            if (value) { return true }
            else { return 'Please share your GitHub information.' }
        }
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        // Validation check to ensure user does not miss any necessary inputs
        validate: (value) => {
            if (value.includes('@')) { return true }
            else { return 'Please enter in a valid email.' }
        }
    }
]

// ),then((
//     title,
//     description,
//     installation,
//     contributions,
//     instructions,
//     usage,
//     license,
//     github,
//     email
// )=>{
// // Template to be used
// const template = `# ${title}
// *[Installation][#installation]
// *[usage][#usage]
// *[Contributions][#contributions]
// *[License][#license]
// # Installation
// ${installation}
// ## Usage
// ${usage}
// ## Contributions
// ${contributions}
// ## License
// ${license}

// # Contact
// # GitHub: ${github}
// # E-Mail: ${email}`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf8', (err) => console.log('Error in write file: ', err));
}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    console.log('answers are: ', answers);
    const markdown = generateMarkdown(answers);
    console.log('generated markdown: ', markdown);
    writeToFile(answers.title + '_readme.md', markdown)
}

// Function call to initialize app 
init();