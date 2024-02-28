const express=require('express')

const app=express();

app.use(express.json())

const data=[]

app.listen(3333,()=>(console.log("server started at port no 4001")))


app.get("/",(req,res)=>{
    res.send(`<h1>YOUR WELCOME</h1>`)
})



app.post('/add',(req,res)=>{
const {number,task}=req.body
data.push({number,task})
res.json({
    output:data
}) })


app.get('/getalltask',(req,res)=>{
    if(data.length==0){
        return res.json(
            {
                message:"Empty todo"
            }
        )
    }
    res.send({
            output:data
        })
})

app.get('/specifictask/:number',(req,res)=>{
    const number=req.params.number;

   const output=data.filter((data)=>(number==data.number))

   if(output.length==0){
    res.send({
        message:"Empty"
    })
   }
    res.send(output)
})

app.patch('/updateNoOftask',(req,res)=>{
    const{oldnumber,newnumber}=req.body

   data.map((data)=>{
    data.number==oldnumber?data.number=newnumber:data.number
   })

   res.send({data})

})  

app.put("/changeTask",(req,res)=>{
const {oldtask,newtask}=req.body
data.map((data)=>{
    data.task==oldtask?data.task=newtask:data.task
   })

   res.send({
    data
   })
})

app.delete('/deletetask',(req,res)=>{
    const tasks=req.body.task

   const temp= data.filter((Task)=>(Task.task!=tasks))
  
   res.send(temp)
})

