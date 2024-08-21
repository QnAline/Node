const express= require('express')
const app = express()

const courses=[
{id:1, name:'Node Js'},
{id:2, name:'React Native'}
]

app.get('/api/courses',(req,res)=>{
 res.send(courses)
})

app.get('/api/courses/:id',(req,res)=>{
 const course_id= courses.find(
    c=>c.id === parseInt(req.params.id)
  )

  if(!course_id) res.status(404).send("id not founnd 404")  // to see the sttus code ctrl+r in chrome inspect tab
  res.send(course_id)
})

app.listen(3000,()=>console.log('Listening on port 3000'))