const SVGCreator = require('./SVGCreator');
const fs = require('fs');

jest.mock('fs');

describe('SVGCreator', () => {
    let svgCreator;
    const mockShape = {
        render: jest.fn(() => '<circle cx="150" cy="100" r="80"/>')
    };

    beforeEach(() => {
        svgCreator = new SVGCreator(mockShape, '#000000', 'Test');
        fs.writeFileSync.mockClear();
    });

    it('should create SVG', () => {
        svgCreator.createSVG();
        expect(fs.writeFileSync).toHaveBeenCalledWith('logo.svg', expect.stringContaining('<svg'));
        expect(fs.writeFileSync).toHaveBeenCalledWith('logo.svg', expect.stringContaining('<circle cx="150" cy="100" r="80"/>'));
        expect(fs.writeFileSync).toHaveBeenCalledWith('logo.svg', expect.stringContaining('<text x="150" y="125" dominant-baseline="middle" text-anchor="middle" fill="#000000" font-size="60">Test</text>'));
    });
});