require('dotenv').config();

const express = require("express");

const bodyParser = require("body-parser");

const ejs = require("ejs");

const mongoose = require("mongoose");

var GoogleStrategy = require('passport-google-oauth20').Strategy;

var passport = require('passport');

 var FacebookStrategy = require('passport-facebook').Strategy;

var findOrCreate = require('mongoose-findorcreate');

// Previous encryption and security

// const encrypt = require("mongoose-encryption");
// const bcrypt = require('bcrypt');
// const saltRounds = 10;



// New encryption and security by cookies
const session = require("express-session");



const passportlocalmongoose = require("passport-local-mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(express.static("public"));

app.use(session({
  secret: 'Little Secret',
  resave: false,
  saveUninitialized: false,

}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  googleId:String,
  facebookId:String,
  secret:String
});
userSchema.plugin(passportlocalmongoose, {
  usernameFeild: 'email'
});

userSchema.plugin(findOrCreate);
// Previous plugin of encryption
// const secret = process.env.SECRET;
// userSchema.plugin(encrypt, {
//   secret: secret,
//   excludeFromEncryption: ["email"]
// });
const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets"

  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


passport.use(new FacebookStrategy({
    clientID: process.env.APP_ID,
    clientSecret: process.env.APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/secrets"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

//TODO
app.get("/", function(req, res) {
  res.render("home");
});
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

app.get('/auth/google/secrets',
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/secrets");
  });

app.get('/auth/facebook',
passport.authenticate('facebook',{scope:["profile"]}));

app.get('/auth/facebook/secrets',
  passport.authenticate('facebook', {
                                      failureRedirect: '/login' }),
function(req,res){
  res.redirect("/secrets");
});


app.get("/login", function(req, res) {
  res.render("login");
});
app.get("/register", function(req, res) {
  res.render("register");
});
app.get("/secrets", function(req, res) {
User.find({secret:{$ne:null}},function(err,foundusers){
  if(err){
    console.log(err);
  }
  else{
    res.render("secrets",{userWithsecrets:foundusers});
  }
});
});
app.get("/submit", function(req, res) {
  if (req.isAuthenticated()) {
    res.render("submit");
  } else {
    res.redirect("login");
  }
});

app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

app.post("/submit",function(req,res){
  const userSecret=req.body.secret;
  console.log(req.user._id);
  User.findById(req.user._id,function(err,founditems){
    if(err){
      console.log(err);
    }
    else{
      if(founditems){
        founditems.secret=userSecret;
        founditems.save(function(){
        res.redirect("/secrets");
});
      }
    }
  });
});

app.post("/register", function(req, res) {


// New encrption by cookies
  User.register({
    username: req.body.username
  }, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      res.redirect("/register");
    } else {
      passport.authenticate("local", {
        failureRedirect: '/login'
      })(req, res, function() {
        res.redirect("/secrets");
      });
    }
    // });
    // }

  });
});

// Previous encryption by bcrypt

// bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
//   const newuser=new User({
//     user:req.body.username,
//     password:hash
//   });
//   newuser.save(function(err){
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.render("submit");
//     }
//   }) ;
// });


app.post("/login",passport.authenticate('local',{ successRedirect: '/secrets',
                                   failureRedirect: '/login' }), function(req, res) {

// New encrption by cookies

  const newuser = new User({
    username: req.body.username,
    password: req.body.password
  });

});
// Previous encryption by bcrypt

  //   const requesteduser=req.body.username;
  //   const password=req.body.password;
  //   User.findOne({user:requesteduser},function(err,founditems){
  //
  // if(err){
  //   console.log(err);
  // }
  //     else
  //     {
  //       if(founditems){
  //       bcrypt.compare(password, founditems.password, function(err, result) {
  //
  //
  //
  //       if(result===true){
  //       res.render("secrets");
  //
  //
  //   }
  // });
  // }
  //
  //
  //
  //     }
  //   });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
