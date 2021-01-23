// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let result;
  switch (license) {
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
  switch (license) {
    case 'MIT':
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return 'Awesome choice of license!';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(title, description, license) {
  return `# ${title} /n
  description: ${description} /n
  license: ${renderLicenseSection(license)}
`;
}

module.exports = generateMarkdown;
