import fs from 'fs';
import inquirer from 'inquirer';


const questions = [
    {
        type: 'input',
        name: 'shape',
        message: 'What shape would you like?',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What shape color would you like?',
    },
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like?',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What Text color would you like?',
    },
    ];


    function writeSvg(answers){
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <${answers.shape} cx="150" cy="100" r="80" fill="${answers.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
      
        </svg>
        `
    }



    function writeFile(fileName, data) {
        fs.writeFile(fileName,data, (err)=>{
            if (err){
                console.error(err);
    
                return
            }
            console.log(`'${fileName}' is saved!`);
        });
    }



    function init() {
        inquirer
        .prompt(questions)
        .then((answers)=> {
            const fileName = 'logo.svg'
            const finalSvg = writeSvg(answers);
            writeFile(fileName, finalSvg);
        })
    }

    init()