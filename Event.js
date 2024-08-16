// A signal that something has happened
const EventEmitter=require('events'); // this is a class
const emitter=new  EventEmitter();

// register a listener
emitter.on('message',(datacalledwith)=>{
console.log('listener called',datacalledwith);
})


// raise an event
emitter.emit('message',{id:'1', url:'http://localhost'});