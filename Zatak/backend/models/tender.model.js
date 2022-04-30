const mongoose= require("mongoose");

const Schema= mongoose.Schema;

var TenderSchema= new Schema({
subject:{
    type: String,
    required:true
    },
description:{
    type: String,
    required:true
    },

    address:{
        type: Number,
        required:true
        },
pricerange:{
    type: String,
        required:true
},
address:{
    type: Number,
    required:true
    },
collabarationState:{
        type: Number,
        required:true
        },
field:{
        type: Number,
        required:true
        },

},
{
timestamps:true,


});

const Tender= mongoose.model('Tender',TenderSchema);
module.exports=Tender;