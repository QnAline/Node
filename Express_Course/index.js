 const express=require('express')
const app = express();

app.get('/',(req,res)=>{
 res.send('Hello ___');
})
app.get('/api/courses',(req,res)=>{
 res.send([1,2,3,5,,-9,6]);
})

// ROUTE Params to fetch route params  http://localhost:8080/api/posts/23/rwandex

app.get('/api/posts/:id',(req,res)=>{
 res.send(req.params.id)
})
// app.get('/api/posts/:age/:address',(req,res)=>{
//  res.send(req.params)
// })
//  to fetch route query

app.get('/api/posts/:age/:address',(req,res)=>{
 res.send(req.query)
})


// TO Use port during production we have to use environment variable so that it can run outside our application
// OR set arbitrary value  $env:PORT=8080



const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Listening on port ${port}`));