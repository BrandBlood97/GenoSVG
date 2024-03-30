const Triangle = require('./Triangle');
const Circle = require('./Circle');
const Square = require('./Square');

describe('Shape classes', () => {
  test('Triangle should render correct SVG', () => {
    const shape = new Triangle('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test('Circle should render correct SVG', () => {
    const shape = new Circle('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r=80" fill="red" />');
  });

  test('Square should render correct SVG', () => {
    const shape = new Square('green');
    expect(shape.render()).toEqual('<rect x="50" y="50" width="150" height="150" fill="green" />');
  });
});
