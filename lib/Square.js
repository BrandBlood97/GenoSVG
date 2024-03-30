// Set up the Square class to inherit from Shape.

const Shape = require('./Shape');

class Square extends Shape {
  render() {
    return `<rect x="50" y="50" width="150" height="150" fill="${this.color}" />`;
  }
}

module.exports = Square;
