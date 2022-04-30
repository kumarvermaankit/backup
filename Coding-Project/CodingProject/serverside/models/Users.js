const mongoose=require("mongoose");

var Schema=mongoose.Schema;

const UserSchema= new Schema({

email:{
type:"String",
required:"true"
},
name:{
    type:"String",
    required:"true"
},
number:{
    type:"Number"
}
})

const User=mongoose.model("User",UserSchema);

module.exports=User;