const SVGCreator = require('./SVGCreator');
const fs = require('fs');
const path = require('path');

jest.mock('fs');

describe('SVGCreator', () => {
    let svgCreator;
    const mockShape = {
        render: jest.fn(() => '<circle cx="150" cy="100" r="80"/>')
    };

    beforeEach(() => {
        svgCreator = new SVGCreator(mockShape, '#000000', 'Test');
        fs.writeFileSync.mockClear();
        fs.existsSync.mockClear();
        fs.mkdirSync.mockClear();
    });

    it('should create SVG', () => {
        svgCreator.createSVG();
        expect(fs.existsSync).toHaveBeenCalledWith('LOGO_HERE');
        expect(fs.mkdirSync).toHaveBeenCalledWith('LOGO_HERE');
        expect(fs.writeFileSync).toHaveBeenCalledWith(path.join('LOGO_HERE', 'logo.svg'), expect.stringContaining('<svg'));
        expect(fs.writeFileSync).toHaveBeenCalledWith(path.join('LOGO_HERE', 'logo.svg'), expect.stringContaining('<circle cx="150" cy="100" r="80"/>'));
        expect(fs.writeFileSync).toHaveBeenCalledWith(path.join('LOGO_HERE', 'logo.svg'), expect.stringContaining('<text x="150" y="125" dominant-baseline="middle" text-anchor="middle" fill="#000000" font-size="60">Test</text>'));
    });
});