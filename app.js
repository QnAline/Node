console.log(module);

// require to load module
console.log('................................................................');
var logger=require('./module')
console.log(logger);
logger.displayLog_asobject('Module exported successfully')
logger('Module exported as function')

// jshint app.js to scan errors in files