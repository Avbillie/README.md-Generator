const fs = require("fs");
const inquirer = require("inquirer");

createReadMe();

async function createReadMe() {
  await inquirer
    .prompt([
      {
        message:
          "Welcome to README generator we will use your repository information to begin and finish the process, press enter to continue...",
        name: "continue"
      },
      {
        type: "input",
        message: "Enter your project title...",
        name: "title"
      },
      {
        type: "input",
        message: "Please give your project a description...",
        name: "description"
      },
      {
        type: "input",
        message: "Please provide the project installation instructions...",
        name: "instructions"
      },
      {
        type: "input",
        message: "Please provide the project usage information...",
        name: "usageInfo"
      },
      {
        type: "input",
        message: "Please provide user contribution guidelines...",
        name: "contributeGuidelines"
      },
      {
        type:"input",
        message:"Please provide a demonstration video or pictures of the project...",
        name: "demo"
      },
      {
        type: "list",
        message:
          "Select a license badge from the following options:",
        choices: ["Slide", "Welcome", "IBM"],
        name: "licenseSelection"
      },
      {
        type: "input",
        message: "Enter your gitHub username...",
        name: "gitHubUsername"
      },
      {
        type: "input",
        message: "Enter your email address...",
        name: "email"
      }
    ])
    .then(function (data) {

      const { title } = data;
      const { description } = data;
      const { instructions } = data;
      const { usageInfo } = data;
      const { contributeGuidelines } = data;
      const { licenseSelection } = data;
      const { gitHubUsername } = data;
      const { email } = data;
      const { demo } = data
      const gitHubUrl = `[GitHub](https://github.com/${gitHubUsername})`;
      const emailAddress = `[Email](${email})`;
      const demoVideoorPic = `[Demo](${demo})`
      let license = "";
      let licenseInfo = "";
      const responseArray = [
        {
          input: title,
          a: "Project title succesfully added to README.md!",
          b: "Project title not added README.md."
        },
        {
          input: description,
          a: "Project description succesfully added to README.md!",
          b: "Project description not added README.md."
        },
        {
          input: instructions,
          a: "Project instructions succesfully added to README.md!",
          b: "Project instructions not added README.md."
        },
        {
          input: usageInfo,
          a: "Project usage information succesfully added to README.md!",
          b: "Project usage information not added README.md."
        },
        {
          input: contributeGuidelines,
          a: "Project contribution guidelines succesfully added to README.md!",
          b: "Project contribution guidelines not added README.md."
        },
        {
          input: licenseSelection,
          a: "Project license succesfully added to README.md!",
          b: "Project license not added README.md."
        },
        {
          input: gitHubUsername,
          a: "GitHub link succesfully added to README.md!",
          b: "GitHub link not added README.md."
        },
        {
          input: email,
          a: "Email link succesfully added to README.md!",
          b: "Email link not added to README.md."
        }
      ];

      for (i = 0; i < responseArray.length; i++) {
        if (responseArray[i].input != " ") {
          console.log(responseArray[i].a);
        } else {
          console.log(responseArray[i].b);
        }
      }

      if (licenseSelection == "slide") {
        license =
          "[![slides-badge](https://cdn.rawgit.com/kentcdodds/custom-badges/VERSION/badges/slides.svg)](http://example.com/your-slides)";
        licenseInfo = "[MIT](https://opensource.org/licenses/MIT)";
      } else if (licenseSelection == "welcome") {
        license =
          "[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)";
        licenseInfo = "[MIT](https://opensource.org/licenses/MIT)";
      } else if (licenseSelection == "Perl") {
        license =
          "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
        licenseInfo = "[Perl](https://opensource.org/licenses/Artistic-2.0)";
      }

      const readMe = `
${license}   
# ${title}

## Description

${description}

## Table of Contents

[1. Description](#Description)\n
[2. Installation](#Installation)\n
[3. Usage Information](#Usage)\n
[4. License](#License)\n
[5. Contributing](#Contributing)\n
[6. Tests](#Tests)\n
[7. Questions](#Questions)

## Installation

${instructions}

## Usage

${usageInfo}

## License

${licenseInfo}

## Contributing

${contributeGuidelines}

## Tests

${demoVideoorPic}

## Questions?

Feel free to email me all your questions ${emailAddress}.\n
Want to see more? Go to my gitHub account ${gitHubUrl}!
            
`;
      fs.writeFile("README.md", readMe, function (err) {
        if (err) {
          console.log("README.md not created.");
          throw err;
        } else {
          console.log("README.md created.");
        }
      });
    });
}
