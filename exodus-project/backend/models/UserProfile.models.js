

var mongoose=require("mongoose");
var encrypt=require("mongoose-encryption");

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
ActiveStatus:false,
RealCoins:{
    type:Number
    
},
BonusCoins:{
    type:Number
}


})
const secret=process.env.MYSECRET;
UserPschema.plugin(encrypt, {  secret:secret,excludeFromEncryption:['username','email'] });

const UserProfile=mongoose.model('UserProfile',UserPschema)

module.exports=UserProfile;