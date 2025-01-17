const fs = require('fs');

// Load the JSON files
const en = JSON.parse(fs.readFileSync('en.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('ar.json', 'utf8'));

// Function to find missing keys
function findMissingKeys(source, target) {
    const missingInSource = Object.keys(target).filter(key => !source.hasOwnProperty(key));
    const missingInTarget = Object.keys(source).filter(key => !target.hasOwnProperty(key));
    return {
        missingInSource,
        missingInTarget
    };
}

// Compare the two JSON files
const result = findMissingKeys(en, ar);

console.log('Missing keys in en.json:', result.missingInSource);
console.log('Missing keys in ar.json:', result.missingInTarget);
