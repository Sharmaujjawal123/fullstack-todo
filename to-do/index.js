const express=require("express");
const { Todo } = require("./db.js");
const {createtodo}=require("./zod.js");
const {updatetodo}=require("./zod.js");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
app.get("/get",async(req,res)=>{

   const todo=await Todo.find({});
   res.json(todo);
})

app.post("/post",async (req,res)=>{

    const createpaylod=req.body;
    const parsed=createtodo.safeParse(createpaylod);
    if(!parsed.success){
        res.status(400).json("not");

    }
   await Todo.create({
    title:createpaylod.title,
    description:createpaylod.description,
    completed:false
    })
    res.json({message:"todo created successfully"})
        // putin mogo


})

app.put("/put",async (req,res)=>{
    const updatepaylod=req.body;
    const parsed=updatetodo.safeParse(updatepaylod);
    if(!parsed.success){
        res.status(400).json(parsed.error.issues);

    }
    await Todo.updateOne({
        _id:req.body.id
    },{$set:{completed:true}})
    res.json({
        msg:"Todo marked completed"
    })


})

app.listen(4000);
