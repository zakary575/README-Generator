inquirer.prompt([
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
    message: "What are the steps required to install your prject?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use",
  },
  {
    type: "input",
    name: "credits",
    message: "List your collaborators, if any",
  },
  {
    type: "input",
    name: "License",
    message: "What licenses did you use?",
  },
]);
