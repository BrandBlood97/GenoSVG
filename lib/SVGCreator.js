// Based on the shape and text provided, the SVGCreator class generates an SVG file with the specified shape and text. 
// The createSVG method generates the SVG content based on the shape and text properties, 
// writes the content to a file named logo.svg, 
// and logs a message indicating that the file has been generated.

const fs = require('fs');

class SVGCreator {
  constructor(shape, textColor, text) {
    this.shape = shape;
    this.textColor = textColor;
    this.text = text;
  }

  createSVG() {
    const svgContent = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${this.shape.render()}
  <text x="150" y="125" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="60">${this.text}</text>
</svg>
    `;
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
  }
}

module.exports = SVGCreator;
