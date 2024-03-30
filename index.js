const inquirer = require('inquirer');
const Triangle = require('./lib/Triangle');
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');
const SVGCreator = require('./lib/SVGCreator');

async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Which shape would you like to create?',
      choices: ['Triangle', 'Circle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color should the shape be?',
    },
    {
      type: 'input',
      name: 'text',
      message: 'What should the text say?',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What color should the text be?',
    },
  ]);

  // Logic to create shape object based on user input
  let shape;
  switch (answers.shape) {
    case 'Triangle':
      shape = new Triangle(answers.shapeColor);
      break;
    case 'Circle':
      shape = new Circle(answers.shapeColor);
      break;
    case 'Square':
      shape = new Square(answers.shapeColor);
      break;
    default:
      console.error('Invalid shape selected');
      return;
  }
};

promptUser()

  const svgCreator = new SVGCreator(shape, answers.textColor, answers.text);
  svgCreator.create