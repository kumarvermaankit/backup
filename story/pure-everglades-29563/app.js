// jshint esversion:6
const express=require("express");
const https=require("https");
const Bodyparser=require("body-parser");
const app=express();



app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
});

app.use(express.static("public"));

app.post("/",function(req,res){

  console.log(req.body)
  var firstname=req.body.fname;
var lastname=req.body.lname;
var email=req.body.iemail;


const options={
  method:"POST",
  auth:"ankit1:3fe9f6e438717a32721ee12ae26d7459-us4"
};

  var data={
    members:[
      {
        email_address:email,
        status:"subscribed",
        merge_fields:{
          FNAME: firstname,
          LNAME: lastname

        }
      }
    ]
  };

var jsondata=JSON.stringify(data);

const url='https://us4.api.mailchimp.com/3.0/lists/a4ff3bcdba' ;

const request=https.request(url, options, function(response){
console.log(response);
if (response.statuscode===20)
{
  res.sendFile(__dirname+"/success.html");
}
else{
  res.sendFile(__dirname+"/failure.html");
}
response.on("data",function(data){
  console.log(JSON.parse(data));

});
});

 request.write(jsondata);
 request.end();
});
app.post("/failure.html",function(req,res){
  res.redirect("/");

});

 app.listen(process.env.PORT || 3000,function(){
   console.log(" Server is running on port 3000");
 });


//Api key
//3fe9f6e438717a32721ee12ae26d7459-us4
//Unique id
//a4ff3bcdba
