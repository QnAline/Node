// every file is a module
function log(message) {
   console.log(message);
}
function itself(message) {
   console.log(message);
}

module.exports=itself;

module.exports.displayLog_asobject= log;
