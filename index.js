// mystic-utils.js

const randomPick = require('random-pick');

// Function to generate a mystical mantra
function generateMysticalMantra() {
  const mantras = [
    "Om Mani Padme Hum",
    "Aum Namah Shivaya",
    "Om Bhur Bhuvah Swaha",
    "So Hum"
  ];
  return randomPick(mantras);
}

// Function to shuffle a mystical array
function shuffleMysticalArray(array) {
  return randomPick.shuffle(array);
}

// Function to check if a number is mystical
function isMysticalNumber(number) {
  const mysticalNumbers = [3, 7, 9, 11, 13];
  return mysticalNumbers.includes(number);
}

module.exports = {
  generateMysticalMantra,
  shuffleMysticalArray,
  isMysticalNumber
};
