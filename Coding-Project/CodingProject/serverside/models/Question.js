const mongoose=require("mongoose");

var Schema=mongoose.Schema;

const QuestionSchema= new Schema({

Question:{
type:"String",
required:"true"
},
Answer:{
    type:"String",
    required:"true"
},
Votes:{
    type:"Number"
}
})

const Question=mongoose.model("Question",QuestionSchema);

module.exports=Question;