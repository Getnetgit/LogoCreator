const {Circle,Tringle,Square}=require('../lib/shapes.js')

describe('Circle',()=>{
    test('Should generate SVG for Circle',()=>{
    const circle=new Circle('abc','red','blue');
    const expectedSVG =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<circle cx="150" cy="100" r="80" fill="blue" />\n<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text>\n</svg>`
       expect(circle.renderShape()).toEqual(expectedSVG);
    });
})

describe('Tringle',()=>{
    test('Should generate SVG for Tringle',()=>{
    const tringle=new Tringle('abc','red','blue');
    const expectedSVG =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<polyline points="150 12,50 188, 250 188" fill='blue'/>\n<text x="150" y="160" font-size="60" text-anchor="middle" fill='red'>ABC</text>\n</svg>`
       expect(tringle.renderShape()).toEqual(expectedSVG);
    });
})

describe('Square',()=>{
    test('Should generate SVG for Square',()=>{
    const square=new Square('abc','red','blue');
    const expectedSVG =`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<rect x="70" y="20" width="160" height="160" stroke="black" fill='blue'/>\n<text x="150" y="125" font-size="60" text-anchor="middle" fill='red'>ABC</text>\n</svg>`;
       expect(square.renderShape()).toEqual(expectedSVG);
    });
})
