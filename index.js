const fs = require("fs");
const inquirer = require("inquirer");

createReadMe();

async function createReadMe() {
  await inquirer
    .prompt([{
        message: "Welcome to README generator we will use your repository information to begin and finish the process, press enter to continue...",
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
        type: "input",
        message: "Please provide a demonstration video or pictures of the project...",
        name: "demo"
      },
      {
        type: "list",
        message: "Select a license from the following options:",
        choices: ["Apache License 2.0", "MIT License", "GNU General Public License v3.0"],
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

      const {
        title
      } = data;
      const {
        description
      } = data;
      const {
        instructions
      } = data;
      const {
        usageInfo
      } = data;
      const {
        contributeGuidelines
      } = data;
      const {
        licenseSelection
      } = data;
      const {
        gitHubUsername
      } = data;
      const {
        email
      } = data;
      const {
        demo
      } = data
      const gitHubUrl = `[GitHub](https://github.com/${gitHubUsername})`;
      const emailAddress = `[Email](mailto:${email}?subject=[GitHub]%20Source%20)`;
      const demoVideoorPic = `[Demo](${demo})`
      const responseArray = [{
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

      let license = licenseSelection;
      let badgeSelection = "";
      let badgeLicense = "";
      const jsonPackage = `
      {
        "name": "readme-generator",
        "version": "1.0.0",
        "description": "generates a readme file based on user input",
        "main": "index.js",
        "author": "Anthony Billie",
        "homepage": "https://github.com/Avbillie/README.md-Generator.git",
        "license": "${licenseSelection}",
        "publishConfig": {
          "registry": "https://npm.pkg.github.com/"
        },
        "repository": {
          "type": "git",
          "url": "git+https://github.com/Avbillie/README.md-Generator.git"
        },
        "scripts": {
          "test":"echo Error: no test specified && exit 1"
        },
        "bugs": {
          "url": "https://github.com/avbillie/README.md-generator/issues"
        },
        "dependencies": {
          "inquirer": "^6.5.2",
          "read": "^1.0.7",
          "repo": "0.0.15"
        }
      }
      `
      fs.writeFile("package.json", jsonPackage, function (err) {
        if (err) {
          console.log("package.json license not created.");
          throw err;
        } else {
          console.log("package.json license created.");
        }
      });

      if (license == "Apache 2.0") {
        badgeSelection =
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

        badgeLicense =
          `This project is licensed under the Apache 2.0 License - see the file for details`;
      } else if (license == "MIT License") {
        badgeSelection =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        badgeLicense = `This project is licensed under the MIT License - see the file for details`;
      } else if (license == "GNU General Public License v3.0") {
        badgeSelection =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        badgeLicense = `This project is licensed under GNU General Public License v3.0 - see the  file for details`;
      }

      const readMe = `
"[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://www.javascript.com/)"${badgeSelection}   
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

${badgeLicense}

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