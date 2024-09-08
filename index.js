const inquirer = require("inquirer");
const fs = require("fs");

const generate = ({
  title,
  description,
  installation,
  usage,
  contributing,
  license,
  tests,
  github,
  email,
}) => {
  const README = `${title}

  ![License](https://img.shields.io/badge/-${license}-blue.svg)


## Description
    
    ${description}

## Table of Contents (Optional)
        
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
    
    ${installation}    

## Usage
    
    ${usage}
    
## Contributing
    
    ${contributing}
    
## License
    
    ${license}    

## Tests

    ${tests}

## Questions

    https://github.com/${github}

    If you have any additional questions please contact me at ${email}
    `;
  return README;
};

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message:
        "Provide a short description explaning the what,why, and how of your project",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use",
    },
    {
      type: "input",
      name: "contributing",
      message: "List your collaborators, if any",
    },
    {
      type: "list",
      name: "license",
      message: "What licenses did you use?",
      choices: ["MIT", "ISC", "Apache_2.0", "BSD", "Open_Software"],
    },
    {
      type: "input",
      name: "tests",
      message: "did you perform any tests",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
  ])
  .then((answers) => {
    if(answers.tests === 'no'){
        answers.tests = ''
    }
    const readmePageContent = generate(answers);

    fs.writeFile("README.md", readmePageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md")
    );
  });
