
const EventEmitter = require('events');

// Immediately invoked function expression
// Node does not execute code directly
// It always wraps code inside a module/function
// (function (exports, require, module, __filename, __dirname) {

console.log(__filename);
console.log(__dirname);
// var x =;				// Results to a syntactical error
// var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
	log(message) {
		// Send an HTTP Request
		console.log(message);
		
		// Raise an Event
		this.emit('messageLogged', {id: 1, url: 'http://'});
		// EMIT - making a noise or produce something - signalling 
	}
}

// exports is a reference to module that exports (module.exports)
module.exports = Logger; 
// module.exports.endPoint = url;
// })