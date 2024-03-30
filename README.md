# GenoSVG

The SVG Logo Maker is a simple command-line application that enables users to generate SVG logos with customizable text, text color, and shapes with shape colors. This tool is especially useful for freelance web developers who need a quick visual element for their projects without the need to hire a graphic designer.

## Features

- Generate SVG logos via a command line interface
- Customize logo text (up to three characters)
- Select text color using color keywords or hexadecimal values
- Choose from three shapes: circle, triangle, or square
- Set the color of the chosen shape using color keywords or hexadecimal values
- Create a directory "LOGO_HERE" to Save the generated SVG to a file named `logo.svg`
- Unit tests for shape classes and SVGCreator function using Jest

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v14.0 or later)
- npm (usually comes with Node.js)

## Installation

To set up the SVG Logo Maker on your local machine, follow these steps:

1. Clone the repository:

```
git clone https://github.com/BrandBlood97/GenoSVG
cd GenoSVG
```

2. Install the necessary Node.js packages:

```
npm install
```

## Usage

Run the application by executing:

```
node index.js
```

Follow the prompts in your command-line interface to:

- Enter the logo text (up to three characters)
- Choose a text color (color keyword or hexadecimal value)
- Select a shape (circle, triangle, or square)
- Set the shape color (color keyword or hexadecimal value)

Upon completion, the application will generate a `logo.svg` file in the "LOGO_HERE" directory and display a message indicating successful creation.

### Example:
![Example Logo](./examples/circle.svg)

## Dependencies

- [Inquirer.js](https://www.npmjs.com/package/inquirer) - for collecting input from the user
- [Jest](https://www.npmjs.com/package/jest) - for running the suite of unit tests

## Running Tests

To run the unit tests for the SVG Logo Maker, use the following command:

```
npm run test
```

Ensure all tests pass to verify that the shape classes are functioning as expected.

## Support

If you encounter any problems or have any queries about using the SVG Logo Maker, please file an issue on the GitHub repository.

## License

This project is open source and available under the [MIT License](LICENSE.md).
