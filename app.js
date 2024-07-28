// шина сообщений:
// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// emitter.on('some_event', (args) => {
//     const { id, text } = args
//     console.log(id, text);
// });

// emitter.emit('some_event', { id: 1, text: 'Hello, this is an event!' });



// логирование:
const Logger = require('./log');
const logger = new Logger();

logger.on('some_event', (args) => {
  const { id, text } = args;
  console.log(id, text);
});

logger.log('User Logged!');