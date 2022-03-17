const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter team manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "Enter team manager's id?",
  },
  {
    type: "input",
    name: "email",
    message: "Enter team manager's email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter team manager's office number?",
  },
  {
    type: "list",
    name: "addMember",
    message: "What type of team member would you like to add?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "Enter engineer's id?",
  },
  {
    type: "input",
    name: "email",
    message: "Enter engineer's email address?",
  },
  {
    type: "input",
    name: "github",
    message: "Enter engineer's GitHub username?",
  },
  {
    type: "list",
    name: "addMember",
    message: "What type of team member would you like to add next?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  },
];
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "Enter intern's id?",
  },
  {
    type: "input",
    name: "email",
    message: "Enter intern's email address?",
  },
  {
    type: "input",
    name: "school",
    message: "Enter intern's school?",
  },
  {
    type: "list",
    name: "addMember",
    message: "What type of team member would you like to add next?",
    choices: [
      "Engineer",
      "Intern",
      "I don't want to add any more team members",
    ],
  },
];
module.exports = { managerQuestions, engineerQuestions, internQuestions };
