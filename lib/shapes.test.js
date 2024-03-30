const Triangle = require('./Triangle');
const Circle = require('./Circle');
const Square = require('./Square');

describe('Shape classes', () => {
  test('Triangle should render correct SVG', () => {
    const shape = new Triangle('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  // Additional tests for Circle and Square
});
