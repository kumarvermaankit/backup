const mongoose=require("mongoose");

var Schema=mongoose.Schema;

const QuestionSchema= new Schema({
    id:{
        type:"Number"
        
    },
    question_title:{
        type:"String",
       default:"none"
        },
        answer:{
            type:[],
        },
        votes:{
            type:"Number",
            default:0
        },
    question_content:{
        type:"String",
       default:"none"
    }

})

const Question=mongoose.model("Question",QuestionSchema);

module.exports=Question;