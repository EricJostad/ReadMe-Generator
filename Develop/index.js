// Required Node modules
const inquirer = require('inquirer');
const fs = require('fs');;

// // TODO: Create an array of questions for user input
const questions = [
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

// // This function will create our README using fs
// createNewFile(title, template);
// }
// );

// // Creating our createNewFile function
// function createNewFile(fileName, data){
//     // fs
//     fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`, data,()=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('Your README has been generated.');
//     })

//     }
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    console.log('answers are: ', answers)
}

// Function call to initialize app 
init();