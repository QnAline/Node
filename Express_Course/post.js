const express= require('express')
const app = express()

// Validation using joi class

const Joi= require('joi');

app.use(express.json())

const courses=[
{id:1, name:'Node Js'},
{id:2, name:'React Native'}
]

app.post('/api/courses',(req,res)=>{

const schema=Joi.object({
 name:Joi.string().min(3).required()
});
const result=schema.validate(req.body)
if(result.error){
 res.status(404).send(result.error.details[0].message)
 return;
}


 const course_id={
     id: courses.length+1,
     name: req.body.name
}
courses.push(course_id)
res.send(course_id)
})


app.listen(3000,()=>console.log('Listening on port 3000'))