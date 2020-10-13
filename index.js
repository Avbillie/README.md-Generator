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
        message: "Enter your repository title...",
        name: "title"
      },
      {
        type: "input",
        message: "Please provide a description for the repository...",
        name: "description"
      },
      {
        type: "input",
        message: "Please provide the installation instructions...",
        name: "instructions"
      },
      {
        type: "input",
        message: `If a package needs to be installed please provide its name "npm i [package name goes here]"...`,
        name: "npm"
      },
      {
        type: "input",
        message: "Please provide the usage information...",
        name: "usageInfo"
      },
      {
        type: "input",
        message: "If there will code for usage guidance please provide it now...",
        name: "code"

      },
      {
        type: "input",
        message: "Please provide user contribution guidelines...",
        name: "contributeGuidelines"
      },
      {
        type: "input",
        message: "Please provide a demonstration video or pictures...",
        name: "demo"
      },
      {
        type: "list",
        message: "Select a license from the following options:",
        choices: ["Apache License 2.0", "MIT License", "GNU General Public License v2.0"],
        name: "licenseSelection"
      },
      {
        type: "list",
        message: "Select the scripting language that was mostly used from the following options:",
        choices: [
          `JavaScript`, `Python`, `Ruby`, `HTML/CSS`,
          `Java`, `Julia`, `C++`, `C`, `Swift`, `Rust`
        ],
        name: "languageSelection"
      },
      {
        type: "input",
        message: "Enter the current year...",
        name: "year"
      },
      {
        type: "input",
        message: "Enter your full name...",
        name: "userName"
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
      },
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
        npm
      } = data;
      const {
        usageInfo
      } = data;
      const {
        code
      } = data
      const {
        contributeGuidelines
      } = data;
      const {
        licenseSelection
      } = data;
      const {
        languageSelection
      } = data;
      const {
        gitHubUsername
      } = data;
      const {
        email
      } = data;
      const {
        demo
      } = data;
      const {
        year
      } = data;
      const {
        userName
      } = data;
      const gitHubUrl = `[GitHub](https://github.com/${gitHubUsername})`;
      const emailAddress = `[Email](mailto:${email}?subject=[GitHub]%20Source%20)`;
      const demoVideoorPic = `[Demo](${demo})`;
      let language = languageSelection;
      let license = licenseSelection;
      let languageBadge = "";
      let languageBadgeObj = [{
          name: `JavaScript`,
          badge: `[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://www.javascript.com/)`
        },
        {
          name: `Python`,
          badge: `[![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](https://www.python.org/)`
        },
        {
          name: `Ruby`,
          badge: `[![forthebadge](https://forthebadge.com/images/badges/made-with-ruby.svg)](https://www.ruby-lang.org/en/)`
        },
        {
          name: `HTML/CSS`,
          badge: `[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)`
        },
        {
          name: `Java`,
          badge: `[![forthebadge](https://forthebadge.com/images/badges/made-with-java.svg)](https://www.java.com/en/)`
        },
        {
          name: `Julia`,
          badge: `[![forthebadge](https://forthebadge.com/images/badges/made-with-julia.svg)](https://julialang.org/)`
        },
        {
          name: `C++`,
          badge: `[![forthebadge](https://forthebadge.com/images/badges/made-with-c-plus-plus.svg)](https://www.cprogramming.com/)`
        },
        {
          name: `C`,
          badge: `[![forthebadge](https://forthebadge.com/images/badges/made-with-c.svg)](https://www.cprogramming.com/)`
        },
        {
          name: `Swift`,
          badge: `[![forthebadge](https://forthebadge.com/images/badges/made-with-swift.svg)](https://swift.org/)`
        },
        {
          name: `Rust`,
          badge: `[![forthebadge](https://forthebadge.com/images/badges/made-with-rust.svg)](https://www.rust-lang.org/)`
        }
      ];
      for (i = 0; i < languageBadgeObj.length; i++) {
        if (language == languageBadgeObj[i].name) {
          languageBadge = languageBadgeObj[i].badge;
          console.log("Language badge added to README.md")
          break;
        } else {
          console.log("Language badge not added to README.md")
        }
      };
      let licenseObj = [{
          name: "Apache License 2.0",
          copyright: `
# Copyright ${year} ${userName}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`,
          badge: `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        },
        {
          name: "MIT License",
          copyright: `
# Copyright ${year} ${userName}

Permission is hereby granted, free of charge, to any person obtaining a 
copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the 
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or 
sell copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE 
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
DEALINGS IN THE SOFTWARE.`,
          badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        },
        {
          name: "GNU General Public License v2.0",
          copyright: `
# Copyright (C) ${year} ${userName}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`,
          badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        }
      ];
      const jsonPackage = `
{
  "name": "${title}",
  "version": "1.0.0",
  "description": "${description}",
  "main": "index.js",
  "author": "${userName}",
  "homepage": "https://github.com/${gitHubUsername}/${title}.git",
  "license": "${licenseSelection}",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/${gitHubUsername}/${title}.git"
  },
  "scripts": {
    "test":"echo Error: no test specified && exit 1"
  },
  "bugs": {
    "url": "https://github.com/${gitHubUsername}/${title}/issues"
  },
  "dependencies": {
    "inquirer": "^6.5.2",
    "read": "^1.0.7",
    "repo": "0.0.15"
  }
}`


      for (i = 0; i < licenseObj.length; i++) {
        if (license == licenseObj[i].name) {
          let licenseMd = `[LICENSE.md](/LICENSE.md)`;
          let copyrightBadge = licenseObj[i].badge;
          let badgeLicense = `This project is licensed under the ${licenseObj[i].name} - see the file ${licenseMd} for details`;
          console.log("Copyright badge added to README.md")

          fs.writeFile("package.json", jsonPackage, function (err) {
            if (err) {
              console.log("package.json not created.");
              throw err;
            } else {
              console.log("package.json created.");
            }
          });
          fs.writeFile("LICENSE.md", licenseObj[i].copyright, function (err) {
            if (err) {
              console.log("LICENSE.md not created.");
              throw err;
            } else {
              console.log("LICENSE.md created.");
            }
          });
          const readMe = `
${languageBadge} ${copyrightBadge}   
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

${instructions}\n
${npm}

## Usage

${usageInfo}\n
${code}

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
          let responseObj = [{
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
          for (i = 0; i < responseObj.length; i++) {
            if (responseObj[i].input != " ") {
              console.log(responseObj[i].a);
            } else {
              console.log(responseObj[i].b);
            }
          };
          fs.writeFile("README.md", readMe, function (err) {
            if (err) {
              console.log("README.md not created.");
              throw err;
            } else {
              console.log("README.md created.");
            }
          });
        }
      };
    });
}