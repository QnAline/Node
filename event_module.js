const EventEmitter = require('events');
const {Logger}= require('./module')

logger = new Logger();

logger.on('messageLog',(arg)=>{
console.log('Listener called in a module,',arg);
})
logger.log_event('event module loaded');
