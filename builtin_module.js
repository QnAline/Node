const path= require('path')
const dir=path.parse(__dirname)
console.log(dir);

const os= require('os')
const totalmemory=os.totalmem()
console.log(`memory: ${totalmemory} MB`)