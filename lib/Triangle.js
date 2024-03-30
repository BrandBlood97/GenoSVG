//Set up the Triangle class to inherit from Shape.

const Shape = require('./Shape');

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

module.exports = Triangle;
