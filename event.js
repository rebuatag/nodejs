// EVENT
// A signal that indicate that something has happened.

// EventEmitter is a class here
const EventEmitter = require('events');
// const emitter = new EventEmitter();


const Logger = require('./logger');
const logger = new Logger();

// Register a Listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
})

// // Raise an Event
// emitter.emit('messageLogged', {id: 1, url: 'http://'});
// // EMIT - making a noise or produce something - signalling 
logger.log('message');