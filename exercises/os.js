const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('TotalMemory: ' + totalMemory);

// Template String
// ES6
console.log(`Free Memory: ${freeMemory}`)
