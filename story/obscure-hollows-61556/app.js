// jshint esversion:6
const express = require("express");

const app = express();
const _=require("lodash");
const date = require(__dirname + "/date.js");
const mongoose=require("mongoose");
var Schema=mongoose.Schema;
let item = [];
let workitems = [];
let day = "";
app.set('view engine', 'ejs');

app.use(express.static("public"));


mongoose.connect("mongodb+srv://darksider:2w3oMYlShS3rz04O@cluster0-rayon.mongodb.net/todolistdb?retryWrites=true&w=majority", { useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology:true });
const connection=mongoose.connection;
try
{
    connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})
}
catch(err){
    console.log(err);
}


const itemSchema= new Schema({
  name:{
    type:String,
    required:true
  }
});
const Items=mongoose.model("Items",itemSchema);
const item1=new Items({
  name:"Welcome"
});
const item2=new Items({
  name:"Add your new item"
});
const item3=new Items({
  name:"Delete Your item"
});

const defaultitems=[item1,item2,item3];

day = date.getdate();

app.get("/", function(req, res) {


  Items.find()
  .then((founditems)=>{
    if(founditems.length===0){
      Items.insertMany(defaultitems,function(err){
        if(err){
          console.log(err);
        }
        else{
          console.log("Successfully added");
        }
        res.redirect("/");
      });
    }
    else
  {  res.render("list", {
      listtitle: day,
      listitem: founditems
    });}

  })
   



});

const listSchema= new Schema({
  name:String,
  items:[itemSchema]
});
const List=mongoose.model("List",listSchema);

app.get("/:listName", function(req, res) {
const customlistname=_.capitalize(req.params.listName);
List.findOne({name:customlistname},function(err,flist){
  if(!err){

if(!flist){
  //Create New list
  const list= new List({
    name:customlistname,
    items:defaultitems
  });
list.save();
res.redirect("/" + customlistname);
}
else{
  res.render("list", {
     listtitle: flist.name,
     listitem: flist.items
});
  }

}


});
});

app.post("/", function(req, res) {

  let itemname=req.body.newitem;
  let listname=req.body.plist;

const newi= new Item({
  name: itemname
});

if(listname===day){
  newi.save();
  res.redirect("/");
}
else{
  List.findOne({name:listname},function(err,foundlist){
    foundlist.items.push(newi);
    foundlist.save();
  });
  res.redirect("/"+listname);
}

});
  // res.render("list", {
  //   listtitle: req.params.listName,
  //   listitem: workitems
  // });


app.post("/delete",function(req,res){

const nlvalue=req.body.namelist;
  const cbvalue=req.body.cb;
  if(nlvalue===day)
  {
    Item.findByIdAndRemove(cbvalue,function(err){
if(err){
  console.log(err);
}
else{
res.redirect("/");
}

});
}
else{
  List.findOneAndUpdate({name: nlvalue},{$pull:{items:{_id:cbvalue}}},function(err){
    if(!err){
      res.redirect("/"+nlvalue);
    }

  });
}
});

app.get("/about", function(req, res) {
  res.render("about");
});
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, function() {
  console.log("Server is running on Successfully");

});
