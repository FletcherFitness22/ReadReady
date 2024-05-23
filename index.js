// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [];
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'list',
    name: 'color',
    message: 'Select your favorite color:',
    choices: ['Red', 'Blue', 'Green', 'Yellow']
  },
  {
    type: 'checkbox',
    name: 'toppings',
    message: 'Select pizza toppings:',
    choices: ['Pepperoni', 'Mushrooms', 'Onions', 'Sausage']
  }
];

inquirer.prompt(questions)
  .then(answers => {
    console.log('User responses:', answers);
  });


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}
function App() {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>This is my React app.</p>
        </div>
    );
}
// Function call to initialize app
init();
