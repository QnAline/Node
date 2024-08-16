const fs= require('fs')
// var readMe= fs.readFileSync('README.md','utf-8')
// console.log(readMe);

// fs.writeFileSync('writeme.txt', readMe);

// for async
var readMe= fs.readFile('README.md','utf-8',function(err,data){
fs.writeFile('writeme.txt', data, function(err,data){{
console.log('data saved successfully');
}});
})
console.log("test async result");

// for readdirectory

var readdir=fs.readdir('./', function(err,data){
  console.log('result:',data);
})