const fs = require("fs");
const categorisedTeams = (employee) =>
  employee.reduce(
    (acc, each) => {
      if (each.getRole() === "Manager") acc.manager = [...acc.manager, each];

      if (each.getRole() === "Engineer") acc.engineer = [...acc.engineer, each];

      if (each.getRole() === "Intern") acc.intern = [...acc.intern, each];

      return acc;
    },
    { manager: [], engineer: [], intern: [] }
  );
//generate cards
const generateCards = (cards, label) => {
  return `<div>
    <h2 class="text-center">${label}</h2>
    <hr />
    <div class="d-flex flex-row flex-wrap justify-content-around">
      ${cards.map((card) => card.generateCard()).join("")}
    </div>
  </div>`;
};
//generate html
const generateHtml = ({ manager, engineer, intern }) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./styles.css" />
      <title>My Notes</title>
    </head>
    <body>
      <header>
        <div class="jumbotron text-center">
          <h1 class="display-4">My Notes</h1>
        </div>
      </header>
  
      <main>
        ${manager.length ? generateCards(manager, "Manager") : ""}
        ${engineer.length ? generateCards(engineer, "Engineer") : ""}
        ${intern.length ? generateCards(intern, "Intern") : ""}
      </main>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></script>
    </body>
  </html>
  `;
};
//write to file
const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};
//export files
module.exports = { categorisedTeams, generateCards, generateHtml, writeToFile };
