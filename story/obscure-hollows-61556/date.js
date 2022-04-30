// jshint esversion:6

module.exports.getdate=function (){
let today= new Date();
let daytoday= today.getDay();

let options={
  weekday:"long",
  day:"numeric",
month:"long"

};

let day=today.toLocaleDateString("en-US",options);
return day;
};
