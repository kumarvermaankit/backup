

var mongoose=require("mongoose");
var encrypt=require("mongoose-encryption");
var Question =require("./Question");
var Image=require("./Questionimg");
// var encKey = process.env.SOME_32BYTE_BASE64_STRING;
// var sigKey = process.env.SOME_64BYTE_BASE64_STRING;

var Schema=mongoose.Schema;

var UserPschema= new Schema({

email:{
    type:String,
    required:true,
    minlength:3,
    unique:true
},
username:{
    type:String,
    required:true,
    minlength:3,
    unique:true
},
password:{
    type:String,
    required:true,
    minlength:4
},
wallet:{
  type:Number,
  default:0  
},

questions:[{
 
    question_title:{
        type:"String",
       default:"none"
        },
        answer:[{
            description:"",
            ans:"",
            id:"",
            vote:false,
            ansusername:""
        }],
        votes:{
            type:"Number",
            default:0
        },
    question_content:{
        type:"String",
       default:"none"
    },
    
     imgName:{
        type:"String",
       default:"none"
    },
    imgData:{
        data:{
        type:String,
        default:"none"
        },
        contentType:"String"
    },
    comments:[{
        comment:"",
        username:""
    }]
        
    
    }]
    
      
  


})
const secret=process.env.MYSECRET;
UserPschema.plugin(encrypt, {  secret:secret,excludeFromEncryption:['username','email','questions','images'] });

const UserProfile=mongoose.model('UserProfile',UserPschema)

module.exports=UserProfile;