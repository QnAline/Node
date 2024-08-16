// every file is a module
const EventEmitter = require('events');
class Logger extends EventEmitter{
 log_event(message){
 console.log(message);
 this.emit('messageLog',{id:'1', url:'http://localhost'})
 }
}

function log(message) {
   console.log(message);
}
function itself(message) {
   console.log(message);
}


module.exports = {
    Logger: Logger,
    itself: itself,
    displayLog_asobject: log
};
