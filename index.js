// var _ = require('underscore'); // if it has './' then it is a path

// // It assumes as a core module
// // Core Module : file or folder in this project
// //  inside the node modules

// var result = _.contains([1, 2, 3], 2);
// console.log(result);


const { write } = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    // not maintanable as we have to provide many routes for various routes defined

    // Framework provides our application a proper structure
    //  so we can easily add more routes while keeping our code maintanable
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]))
        res.end();
    }
});

// server.on('connection', (socket) => {
//     console.log('New Connection');
// });

server.listen(3000);

console.log('Listening on port 3000...');