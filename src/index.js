const inquirer = require("inquirer");

const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./lib/questions");
const manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const {
  categorisedTeams,
  generateCards,
  generateHtml,
  writeToFile,
} = require("../utils");

const askQuestions = async () => {
  const employees = [];

  const managerAnswers = await inquirer.prompt(managerQuestions);
  const newManager = new manager(managerAnswers);
  employees.push(newManager);
  while (
    managerAnswers.addMember !== "I don't want to add any more team members"
  ) {
    if (managerAnswers.addMember == "Engineer") {
      const engineerAnswers = await inquirer.prompt(engineerQuestions);
      const newEngineer = new Engineer(engineerAnswers);
      employees.push(newEngineer);
      managerAnswers.addMember = engineerAnswers.addMember;
    } else if (managerAnswers.addMember == "Intern") {
      const internAnswers = await inquirer.prompt(internQuestions);
      const newIntern = new Intern(internAnswers);
      employees.push(newIntern);
      managerAnswers.addMember = internAnswers.addMember;
    }
  }

  const categorisedEmployees = categorisedTeams(employees);
  const html = generateHtml(categorisedEmployees);
  writeToFile("./dist/index.html", html);
  console.log("Team Successfully Generated");
  process.exit(0);
};

askQuestions();
