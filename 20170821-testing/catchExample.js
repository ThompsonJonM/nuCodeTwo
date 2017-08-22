var fileName = process.argv[2];
var mockError = require('./helpers').mockError;
var readFile = require('./helpers').readFile;

try {
    readFile(fileName);
} catch (err) {
    console.log('Error reading ' + fileName + '. Error logged. Continuing...');
}

console.log('The rest of your program worked.');