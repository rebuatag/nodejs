var _ = require('underscore'); // if it has './' then it is a path

// It assumes as a core module
// Core Module : file or folder in this project
//  inside the node modules

var result = _.contains([1, 2, 3], 2);
console.log(result);
