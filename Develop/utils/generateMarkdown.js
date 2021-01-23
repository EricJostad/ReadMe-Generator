// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let result;
  switch (license) {
    case 'Apache':
      result = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;

      case 'BSD 2-Clause':
      result = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      break;

      case 'BSD 3-Clause':
      result = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;

    case 'GPLv2':
      result = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;

    case 'GPLv3':
      result = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;

    case 'MIT':
      result = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;

    case 'Mozilla':
      result = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;

    default:
      result = '';
      break;
  }
  return result;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let result;
  switch (license) {
    case 'Apache':
      result = '[Apache](https://opensource.org/licenses/Apache-2.0)';
      break;

    case 'BSD 2-Clause':
      result = '[BSD 2-Clause](https://opensource.org/licenses/BSD-2-Clause)';
      break;

    case 'BSD 3-Clause':
      result = '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
      break;

    case 'GPLv2':
      result = '[GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;

    case 'GPLv3':
      result = '[GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
      break;

    case 'MIT':
      result = '[MIT](https://opensource.org/licenses/MIT)';
      break;

    case 'Mozilla':
      result = '[Mozilla](https://opensource.org/licenses/MPL-2.0)';
      break;

    default:
      result = '';
      break;
  }
  return result;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}  
  ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, license }) {
  return `# ${title} /n
  description: ${description} /n
  license: ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
