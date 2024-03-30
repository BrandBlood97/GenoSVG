const inquirer = require("inquirer");
const Triangle = require("./lib/Triangle");
const Circle = require("./lib/Circle");
const Square = require("./lib/Square");
const SVGCreator = require("./lib/SVGCreator");

async function promptUser() {
    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "shape",
            message: "Which shape would you like to create?",
            choices: ["Triangle", "Circle", "Square"],
        },
        {
            type: "input",
            name: "shapeColor",
            message: "What color should the shape be?",
        },
        {
            type: "input",
            name: "text",
            message: "Give 3 or less characters for the text!",
            // Validate that the input is 3 or less characters
            validate: function (value) {
                if (value.length <= 3) {
                    return true;
                }
                return "Please enter 3 or less characters.";
            },
        },
        {
            type: "input",
            name: "textColor",
            message: "What color should the text be?",
            type: "input",
            // Validate that the input is a valid color keyword or hexadecimal color code
            validate: function (value) {
                const isValidColor =
                    /^#([0-9A-F]{3}){1,2}$/i.test(value) ||
                    [
                        "black",
                        "white",
                        "red",
                        "blue",
                        "yellow",
                        "green",
                        "purple",
                        "cyan",
                        "magenta",
                    ].includes(value);
                if (isValidColor) {
                    return true;
                }
                return "Please enter a valid color keyword or hexadecimal color code.";
            },
        },
    ]);

    // Logic to create shape object based on user input
    let shape;
    switch (answers.shape) {
        case "Triangle":
            shape = new Triangle(answers.shapeColor);
            break;
        case "Circle":
            shape = new Circle(answers.shapeColor);
            break;
        case "Square":
            shape = new Square(answers.shapeColor);
            break;
        default:
            console.error("Invalid shape selected");
            return;
    }

    const svgCreator = new SVGCreator(shape, answers.textColor, answers.text);
    svgCreator.createSVG();
}

promptUser();
