// Handling request and response from a webserver
// Epress has a clear structure than http


const http= require('http');
const server= http.createServer((req,res)=>{
if(req.url =='/'){
 res.write('hello World');
 res.end()
}
if(req.url === '/numbers'){
 res.write(JSON.stringify([1,2,3,4,5]));
 res.end();
}

})

server.listen(3000);
console.log('listening on port 3000');