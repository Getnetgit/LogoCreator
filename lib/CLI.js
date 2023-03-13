const inquirer = require('inquirer');
const { Circle, Tringle, Square } = require('./shapes.js');
const fs = require('fs')
const colorKeywords=require('./colorKeywords.js')//An array of color keywords

//CLI class contains three functions 
class CLI {
//This functin will generate shape svg file based on shape type text , textcolor and shape color . Logo_ will be concatinated with the entery text and used as file name and will be placed in example folder.
    generateShapeFile(shape, text="", textColor, shapeColor) {
        let shapetype = shape.toLocaleLowerCase();
        let txtLower=text.toLocaleLowerCase()
        switch (shapetype) {

            case 'circle':
                const circle = new Circle(text, textColor, shapeColor);
                fs.writeFile(`./examples/Logo_${txtLower}.svg`, circle.renderShape(), (err) => {
                    if (err) throw err;
                })
                break;
            case 'tringle':
                const tringle = new Tringle(text, textColor, shapeColor);
                //const filePath='../exa
                fs.writeFile(`./examples/Logo_${txtLower}.svg`, tringle.renderShape(), (err) => {
                    if (err) throw err;
                })
                break;

            case 'square':
                const square = new Square(text, textColor, shapeColor);
                //const filePath='./'
                fs.writeFile(`./examples/Logo_${txtLower}.svg`, square.renderShape(), (err) => {
                    if (err) throw err;
                })
                break;


        }
    }
//This function will check the validity of colorkeyword or hex input
    isColor(color){
       let test1=colorKeywords.includes(color);
        var test2 = /^#[0-9A-F]{6}$/i.test(color);
        if(test1 == true || test2 == true){
          return true;
        } else{
          return false;
        }
      }
//this function will initiate prompt to accept user inputs and call generateShapeFile to generat svg file and isColor function to validate user entry of color key wordor hex input
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter text upto three characters',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Enter a color keyword (OR a hexadeimal number) for text',
                },
                {
                    type: 'list',
                    message: 'Choose Shape from the list',
                    name: 'shape',
                    choices: ['circle', 'square', 'tringle'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter a color keyword (OR a hexadeimal number) for shape',
                },
        
            ])
            .then((res) => {
                const isTextColor=this.isColor(res.textColor);
                const isShapeColor=this.isColor(res.shapeColor);
                if (isTextColor && isShapeColor) {
                    this.generateShapeFile(res.shape,res.text,res.textColor,res.shapeColor)
                    console.log('Logo.svg is generated')
                } else {
                   
                    if (!isTextColor && !isShapeColor) {
                        console.log("Both Text and shape colors are invalid!")
                    } else if (!isShapeColor) {
                        console.log("Shape color is invalid!")
                    }else{
                        
                        console.log("Text color is invalid!")

                    }
                        
                }
                

            });
    }
}

module.exports = CLI;