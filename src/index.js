const inquirer = require("inquirer");
const {
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./lib/questions");
const manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const categorisedTeams = require("../utils");
const generateHtml = require("../utils");
const writeToFile = require("../utils");
const askQuestions = async () => {
  const askManagerQuestions = await inquirer.prompt(managerQuestions);
  const addManager = new manager();
  manager.push(addManager);
  while (
    managerQuestions.addMember !== "I don't want to add any more team members"
  ) {
    if (managerQuestions.addMember == "Engineer") {
      const askEngineerQuestions = await inquirer.prompt(engineerQuestions);
      const addEngineer = new Engineer();
      engineer.push(addEngineer);
    } else if (managerQuestions.addMember == "Intern") {
      const askInternQuestions = await inquirer.prompt(internQuestions);
      const addIntern = new Intern();
      intern.push(addIntern);
    }
  }
  const html = generateHtml(categorisedTeams);
  writeToFile = ("../dist/index.html", html);
  console.log("Team Successfully Generated");
  process.exit(0);
};

askManagerQuestions();
