// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function badge(license) {

  return license == "No License" 
    ? ""
    : `[![${license}](https://img.shields.io/badge/License-${license}-blue)](https://www.mit.edu/~amini/LICENSE.md)`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
#${answers.title}

##License:
${badge(answers.license)}

##Description:
${answers.description}

##Table of Contents
[Installation](#Installation)
[Usage](#Usage)
[Credits](#Credits)
[Licence](#Licence)
[Tests](#Tests)
[Github](#Github)
[Email](#Email)

##Installation:
${answers.installation}

##Usage:
${answers.usage}

##Credits:
${answers.contributing}

##Licence:

##Tests:
${answers.tests}

##Github:
[GitHub Profile](https://github.com/${answers.github})

##Email:    
[Email](mailto:${answers.email})   
`;}

module.exports = generateMarkdown;
