const mongoose=require("mongoose");

var Schema=mongoose.Schema;

const QuestionSchema= new Schema({
    documentname:{
        type:"String"
    },
    questions:[{
 
id:{
    type:"String",
    required:true  
},

time:{
    type:"String",
    required:true
},
username:{
    type:"String",
    required:true
},
        question_title:{
            type:"String",
           default:"none"
            },
            answer:[{
                description:"",
                ans:"",
                id:"",
                vote:false,
                ansusername:"",
                index:{type:"Number"},
                upvote:{
                    type:"Number",
                    default:0
                },
                images:[{}]
            }],
         
        question_content:{
            type:"String",
           default:"none"
        },
        

        imginfo:[{}],
        //  imgName:[{
        //     type:"String",
        //    default:"none"
        // }],
        // imgData:{
        //     data:{
        //     type:String,
        //     default:"none"
        //     },
        //     contentType:"String"
        // },
        comments:[{
            comment:"",
            username:""
        }],
        value:{
            type:"Object",
            default:{amount:0}
        },
        documentname:{
            type:"String"
        },
        keywords:{
            language:[],
            framework:[],
            field:[]
         
        },
         index_no:{
             type:"Number",
             default:0
         },
      
        }],
        // silverquestions: [{
        //     id:{
        //         type:"String",
        //         required:true  
        //     },
        //     time:{
        //         type:"String",
        //         required:true
        //     },
        //     username:{
        //         type:"String",
        //         required:true
        //     },
        //     question_title:{
        //         type:"String",
        //        default:"none"
        //         },
        //         answer:[{
        //             description:"",
        //             ans:"",
        //             id:"",
        //             vote:false,
        //             ansusername:""
        //         }],
             
        //     question_content:{
        //         type:"String",
        //        default:"none"
        //     },
            
        //      imgName:{
        //         type:"String",
        //        default:"none"
        //     },
        //     imgData:{
        //         data:{
        //         type:String,
        //         default:"none"
        //         },
        //         contentType:"String"
        //     },
        //     comments:[{
        //         comment:"",
        //         username:""
        //     }],
        //     value:{
        //         type:Object,
        //         default:{amount:0}
        //     }
            
        // }]
        // ,
        // bronzequestions: [{
        //     id:{
        //         type:"String",
        //         required:true  
        //     },
        //     time:{
        //         type:"String",
        //         required:true
        //     },
        //     username:{
        //         type:"String",
        //         required:true
        //     },
        //     question_title:{
        //         type:"String",
        //        default:"none"
        //         },
        //         answer:[{
        //             description:"",
        //             ans:"",
        //             id:"",
        //             vote:false,
        //             ansusername:""
        //         }],
             
        //     question_content:{
        //         type:"String",
        //        default:"none"
        //     },
            
        //      imgName:{
        //         type:"String",
        //        default:"none"
        //     },
        //     imgData:{
        //         data:{
        //         type:String,
        //         default:"none"
        //         },
        //         contentType:"String"
        //     },
        //     comments:[{
        //         comment:"",
        //         username:""
        //     }],
        //     value:{
        //         type:Object,
        //         default:{amount:0}
        //     }
            
        // }],
        // extraquestions:[{
        //     id:{
        //         type:"String",
        //         required:true  
        //     },
        //     time:{
        //         type:"String",
        //         required:true
        //     },
        //     username:{
        //         type:"String",
        //         required:true
        //     },
        //     question_title:{
        //         type:"String",
        //        default:"none"
        //         },
        //         answer:[{
        //             description:"",
        //             ans:"",
        //             id:"",
        //             vote:false,
        //             ansusername:""
        //         }],
             
        //     question_content:{
        //         type:"String",
        //        default:"none"
        //     },
            
        //      imgName:{
        //         type:"String",
        //        default:"none"
        //     },
        //     imgData:{
        //         data:{
        //         type:String,
        //         default:"none"
        //         },
        //         contentType:"String"
        //     },
        //     comments:[{
        //         comment:"",
        //         username:""
        //     }],
        //     value:{
        //         type:Object,
        //         default:{amount:0}
        //     }
        // }]

})

const Question=mongoose.model("Question",QuestionSchema);

module.exports=Question;