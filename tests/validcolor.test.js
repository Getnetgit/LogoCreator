const cli = require('../lib/CLI.js');

describe("Color validation",()=>{
    test("Sould return true for valid color keyword entry",()=>{
      const validColorKeyword='blue';
      const CLI=new cli();
      expect(CLI.isColor(validColorKeyword)).toEqual(true);
    })
})

describe("Color validation",()=>{
    test("Sould return true for invalid color keyword entry",()=>{
      const validColorKeyword='bluewish';
      const CLI=new cli();
      expect(CLI.isColor(validColorKeyword)).toEqual(false);
    })
})