const { default: mongoose } = require("mongoose");
const mongose=require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/to-do").then(()=>console.log("Mongo DB Connected")).catch(err=>console.log(err));
const todoschema=mongose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const Todo=mongose.model("Todo",todoschema);
module.exports={
    Todo
}