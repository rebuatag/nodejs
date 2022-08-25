// contains a javascript engine that can execute a JS code
// A function sayHello that logs a message on the console
// node is a C++ program that includes chromes V8 js engine
// node is gonna give the JS file to V8 for execution
// function sayHello(name) {
// 	console.log('Hello ' + name);
// }

// sayHello('Taggy');

// GLOBAL OBJECTS IN JS
// console.log() -> global object
// setTimeout() -> call a function after a delay
// can use on the client, on the browser, inside of node
// clearTimeout()
// setInterval() -> repeatedly call a function after a givern delay
// clearInterval() -> stop the function from being called repeatedly

// window object -> all the variables and functions that are defined globally can be accessed via 
// window.console.log

// declaring a variable
// var message = '' -> var and functions not added to the global object returns undefined; not available outside the file/global env

// global.console.log()


// Client side JS
// when we declare a var or function, that is added to the global scope
// available via the window object

//  in order to build reliable and maintainable applications, we should avoid defining variables and functions in global scope

// var sayHello = function () {

// }

// window.sayHello();

// MODULARITY
// create small building blocks or modules where we define our variables and functions
// every file in the node application is considered a module
// variable and functions defined in that file are scope within the fule only (local)
// private -> not available outside the module
// if you want to use a variable and a function defined in the module outside that module, u need to explicitly export it and make it public
// every node application has atleast one file or one module which we call a main module
// in this case, app.js is our main module
// in node, every file is a module; and the variables and functions defined withing the file are scoped within the module and are not availble in the global env

// CREATING A MODULE
// ability to ddefine constants
// Best Practice when loading a module: better to store the results in a constant 
// so that we wont be able to accidnetaly modify/overwrite the value

// LOADING A MODULE
const logger = require('./logger');	//returns the object that is exported from the target module

// logger = 1;			// will result to an exception if declared as var
					// will result to a typeError
console.log(logger);	// returns an object

logger.log('hello')


