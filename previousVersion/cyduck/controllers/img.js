
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");

const router = express.Router();
const Question = require("../models/Question").Question;
const QuestionSchema = require("../models/Question").QuestionSchema;
const UserProfile = require("../models/UserProfile.models");
const Q = require("../models/Q")
const app = express();

app.use(cors());
var uniqid = require('uniqid');





var darray = [];

var darray1 = []

var darray2 = [];



var users = []



var no_of_mquestions = 0
var no_of_squestions = 0

var activePage = []

// var storage=multer.diskStorage({
//     destination: (req,file,cb)=>{

//         cb(null,"./client/src/components/uploads");
//     },
//     filename: (req,file,cb)=>{
//         cb(null,Date.now()+"-"+file.originalname)
//     }
//     });

// const fileFilter=(req,file,cb)=>{
//     if(file.mimetype==='image.jpeg' || file.mimetype==='image.png' ){
//         cb(null,true)
//     }
//     else{
//        cb(null,false)
//     }
// }    

// const upload=multer({
//     storage:storage,
//     limits:{
//         fileSize:1024*1024*5
//     }

// })




router.post("/createcommunity", (req, res, next) => {
    const newCommunity = mongoose.model(req.body.community, QuestionSchema);
})



router.get("/allusers", (req, res, next) => {
    UserProfile.find()
        .then((result) => {
            result.map((each) => {
                users.push(each.username)
            })

            res.send({ data: users })
            users = []
            return
        })
        .catch((err) => {
            res.send({ data: false })
        })



})






router.post("/usernamechange", (req, res, next) => {


    UserProfile.findOne({ username: req.body.oldusername })
        .then((result) => {
            result.username = req.body.username
            result.save()
            res.send({ data: true })
            return
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get("/info/:username", (req, res, next) => {


    UserProfile.findOne({ username: req.params.username })
        .then((result) => {

            res.send({ data: { phone: result.phone_number, college: result.college, upi: result.upi_id, skills: result.skills, answered: result.answered, email: result.email } })
        })
})

router.post("/phone", (req, res, next) => {


    UserProfile.findOne({ username: req.body.username })
        .then((result) => {
            result.phone_number = req.body.phone
            result.save()
            res.send({ data: true })
            return
        })
        .catch((err) => {
            res.send({ data: err })
        })
})

router.post("/college", (req, res, next) => {


    UserProfile.findOne({ username: req.body.username })
        .then((result) => {
            result.college = req.body.college
            result.save()
            res.send({ data: true })
            return
        })
        .catch((err) => {
            res.send({ data: err })
        })
})

router.post("/upi", (req, res, next) => {


    UserProfile.findOne({ username: req.body.username })
        .then((result) => {
            result.upi_id = req.body.upi
            result.save()
            res.send({ data: true })
            return
        })
        .catch((err) => {
            res.send({ data: err })
        })
})


router.post("/addskill", (req, res, next) => {


    UserProfile.findOne(({ username: req.body.username }))
        .then((result) => {
            console.log(result.skills)
            result.skills = req.body.skills;

            result.save();
            res.send({ data: true });
            return;
        })
        .catch((err) => {
            res.send({ data: err })
        })
})






// router.post("/",upload.array("file",10),(req,res,next)=>{

// console.log(req.files)

// try{
//     req.files.map((each)=>{
//         imgobject.push(each)
//     })
// res.send({data:true})

// }
// catch(err){
// console.log(err);
// }    


// })

router.post("/questioncheck", (req, res, next) => {
    var index_no = 0

    var id = uniqid(req.body.info.username)

    var time = new Date()

    var documentname;

    if ((req.body.question.paymentinfo.amount) / 100 === 10) {
        documentname = "gold"
    }
    else if ((req.body.question.paymentinfo.amount) / 100 === 5) {
        documentname = "silver"
    }
    else if ((req.body.question.paymentinfo.amount) / 100 === 3) {
        documentname = "bronze"
    }
    else {
        documentname = "extra"
    }

    const newdocument = {
        documentname: req.body.document,
        imginfo: req.body.imageinfo,
        question_title: req.body.question.title,
        question_content: req.body.question.content,
        answer: [],
        username: req.body.info.username,
        time: time,
        id: id,
        comments: [],
        value: req.body.question.paymentinfo,
        documentname: documentname,
        keywords: {
            language: req.body.keywords.languages,
            framework: req.body.keywords.frameworks,
            field: req.body.keywords.fields
        },
        index_no: index_no,
        links: req.body.links,
        community: req.body.community

    }

    try {
        //     Question.findOne({documentname:documentname})

        //     .then((result)=>{

        //          if(!result || result===null){
        //              Question.create(newdocument)
        //          }
        //         else{
        //         console.log("already ")     
        //         }
        //         res.send({data:true})

        //     })
        //   .catch(err=>console.log(err));

        Question.create(newdocument);

    }
    catch (err) {
        console.log(err);
    }


})

router.post("/question", (req, res, next) => {
    req.connection.setTimeout(1000 * 60 * 10);




    var index_no = 0

    var id = uniqid(req.body.info.username)

    var time = new Date()

    var documentname;

    if ((req.body.question.paymentinfo.amount) / 100 === 10) {
        documentname = "gold"
    }
    else if ((req.body.question.paymentinfo.amount) / 100 === 5) {
        documentname = "silver"
    }
    else if ((req.body.question.paymentinfo.amount) / 100 === 3) {
        documentname = "bronze"
    }
    else {
        documentname = "extra"
    }

    const newdocument = {
        documentname: documentname,
        questions: [{
            imginfo: req.body.imageinfo,
            question_title: req.body.question.title,
            question_content: req.body.question.content,
            answer: [],
            username: req.body.info.username,
            time: time,
            id: id,
            comments: [],
            value: req.body.question.paymentinfo,
            documentname: documentname,
            keywords: {
                language: req.body.keywords.languages,
                framework: req.body.keywords.frameworks,
                field: req.body.keywords.fields
            },
            index_no: index_no,
            links: req.body.links,
            communities: req.body.communities
        }]
    }

    try {
        Question.findOne({ documentname: documentname })

            .then((result) => {

                if (!result || result === null) {
                    Question.create(newdocument)
                }
                else {
                    index_no = result.questions.length;
                    result.questions.push({


                        question_title: req.body.question.title,
                        question_content: req.body.question.content,
                        answer: [],
                        imginfo: req.body.imageinfo,
                        username: req.body.info.username,
                        time: time,
                        id: id,
                        value: req.body.question.paymentinfo,
                        documentname: documentname,
                        keywords: {
                            language: req.body.keywords.languages,
                            framework: req.body.keywords.frameworks,
                            field: req.body.keywords.fields
                        },
                        index_no: index_no,
                        links: req.body.links

                    })
                    result.save();


                }
                res.send({ data: true })

            })
            .catch(err => console.log(err));

    }
    catch (err) {
        console.log(err);
    }

    try {
        UserProfile.findOne({ email: req.body.info.email })
            .then((result) => {
                result.questions.push({
                    question_id: id,
                    index_no: index_no,
                    docname: documentname
                })
                result.save();
            })

    }
    catch (err) {
        console.log(err)
    }


    imgobject = []


})

var activepage = 1;
var no_of_questions = 0;

router.post("/activepage", (req, res, next) => {

    activepage = req.body.pageNumber;

    res.send({ data: true })

})

router.get("/", (req, res, next) => {

    req.connection.setTimeout(1000 * 60 * 10);



    async function Main() {
        try {
            const result = await Question.find()
            result.map(res => {

                res.questions.map((each) => {
                    var idx = res.questions.indexOf(each)
                    no_of_questions++;
                    if (darray.length < (6 * activepage)) {
                        darray.push({ info: { id: each.id, question_title: each.question_title, index_no: each.index_no, documentname: each.documentname, time: each.time, username: each.username }, index: idx })

                    }
                })



                if (darray.length > 6 * (activepage - 1)) {
                    darray.splice(0, (6 * (activepage - 1)))
                }









            })




        }
        catch (err) {
            console.log(err);
        }

        return darray
    }

    Main()
        .then((darr) => {
            try {
                res.send({ arr: darr, pagenumber: activepage, no_of_questions: no_of_questions });
                darray = [];
                refreshcontroller--
                no_of_questions = 0;
                activepage = 1
            }
            catch (err) {
                console.log(err);
            }
        })











})

router.get("/question/:index/:document/:username", (req, res, next) => {


    try {
        Question.findOne({ documentname: req.params.document })
            .then((result) => {

                res.send({ data: result.questions[req.params.index] })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    catch (err) {
        console.log(err)
    }
})


router.get("/community/:name/:activepage", async (req, res, next) => {

    var array = []

    function Findcommunity() {
        try {


            Question.find({ "questions.communities": [req.params.name] }).then((result) => {
                result.map((e) => {
                    e.questions.map((each) => {

                        no_of_questions = no_of_questions + each.length;

                        if (array.length > (6 * activepage)) {
                            return;
                        }

                        if (array.length < (6 * req.params.activepage)) {
                            if (each.communities.includes(req.params.name) === true) {

                                var idx = each.questions.indexOf(res)
                                array.push({ info: { id: res.id, question_title: res.question_title, index_no: res.index_no, documentname: res.documentname, time: res.time, username: res.username }, index: idx })

                            }
                        }
                    })
                })
            })
        }
        catch (err) {
            console.log(err)
        }
        return array
    }

    Findcommunity()
        .then((darr) => {
            try {
                if (darr.length > (6 * (activepage - 1))) {
                    darr.splice(0, (6 * (activepage - 1)))
                }

                res.send({ arr: darr, pagenumber: activepage, no_of_questions: no_of_questions });

                no_of_questions = 0;
                activepage = 1;
            }
            catch (err) {
                console.log(err)
            }
        })

})

router.get("/mygroups/:username", async (req, res, next) => {

    try {
        const user = await UserProfile.findOne({ username: req.params.username })
        if (user) {
            res.status(200).json(user.communities)
        }
        else {
            console.log("User Not Found")

        }
    }
    catch (err) {
        console.log(err)
    }
})

router.get("/search/:field/:language/:framework/:string/:activepage", (req, res, next) => {
    req.connection.setTimeout(1000 * 60 * 10);


    var lstr = req.params.language;
    lstr = lstr.split(",")
    for (var i = 0; i < lstr.length; i++) {
        if (lstr[i] === "C  ") {
            lstr[i] = "C++"
        }
    }

    var activepage = req.params.activepage
    var fstr = req.params.field;
    fstr = fstr.split(",")

    var frstr = req.params.framework;
    frstr = frstr.split(",")




    Question.find()
        .then((result) => {
            if (result) {
                result.map((each) => {
                    if (f === e) {

                        var idx = each.questions.indexOf(res)
                        darray2.push({ info: { id: res.id, question_title: res.question_title, index_no: res.index_no, documentname: res.documentname, time: res.time, username: res.username }, index: idx })
                        count++
                    }
                    each.questions.map((res) => {
                        var count = 0
                        if (darray2.length < (6 * activepage)) {


                            if (res.keywords["field"] !== null) {
                                res.keywords["field"].map((f) => {
                                    fstr.map((e) => {


                                    })
                                })
                            }
                            if (count > 0) {
                                return
                            }
                            if (res.keywords["language"] !== null) {
                                res.keywords["language"].map((l) => {
                                    lstr.map((e) => {


                                        if (l === e) {

                                            var idx = each.questions.indexOf(res)
                                            darray2.push({ info: { id: res.id, question_title: res.question_title, index_no: res.index_no, documentname: res.documentname, time: res.time, username: res.username }, index: idx })
                                            return
                                        }
                                    })
                                })
                            }
                            if (count > 0) {
                                return
                            }
                            if (res.keywords["framework"] !== null) {
                                res.keywords["framework"].map((f) => {
                                    frstr.map((e) => {
                                        if (f === e) {

                                            var idx = each.questions.indexOf(res)
                                            darray2.push({ info: { id: res.id, question_title: res.question_title, index_no: res.index_no, documentname: res.documentname, time: res.time, username: res.username }, index: idx })
                                            return
                                        }
                                    })
                                })
                            }
                            if (count > 0) {
                                return
                            }




                            var array = [];
                            var nof = 0
                            array = req.params.string.split(" ");



                            var notincludearray = ["what", "which", "how", "is", "are"]

                            for (var i = 0; i < array.length; i++) {
                                if (array[i] === res.id) {
                                    var idx = each.questions.indexOf(res)
                                    darray2.push({ info: { id: res.id, question_title: res.question_title, index_no: res.index_no, documentname: res.documentname, time: res.time, username: res.username }, index: idx })
                                    return
                                }
                                if (array[i].length > 2) {
                                    if ((res.question_title.toLowerCase()).includes(array[i].toLowerCase()) && notincludearray.includes(array[i].toLowerCase()) === false) {
                                        var idx = each.questions.indexOf(res)

                                        darray2.push({ info: { id: res.id, question_title: res.question_title, index_no: res.index_no, documentname: res.documentname, time: res.time, username: res.username }, index: idx })
                                        return;
                                    }
                                }

                            }



                        }

                    })
                })
            }
            else {
                res.send("No search results found")
            }
            if (darray2.length === 0) {
                darray2.push(null)
            }
            no_of_questions = darray2.length;

            if (darray2.length > 6 * (activepage - 1)) {
                darray2.splice(0, (6 * (activepage - 1)))
            }
            try {
                res.send({ arr: darray2, pagenumber: activepage, no_of_questions: no_of_questions });
                darray2 = [];

                no_of_questions = 0;
                activepage = 1
            }
            catch (err) {
                console.log(err);
            }
        })
})

router.get('/mq/:username', (req, res, next) => {

    if (darray1.length > (6 * (activepage - 1))) {
        darray1.splice(0, (6 * (activepage - 1)))
    }

    res.send({ arr: darray1, pagenumber: activepage, no_of_questions: no_of_mquestions });
    darray1 = []
    no_of_mquestions = 0;
    activepage = 1;

})

var ids = []

router.get("/myquestions/:username", async (req, res, next) => {


    var username = req.params.username;
    console.log(activePage)
    var doc = ["gold", "silver", "bronze", "extra"]
    try {
        const result = await UserProfile.findOne({ username: username })
        if (result) {
            no_of_questions = result.questions.length
            result.questions.map((each) => {
                ids.push(each.question_id)
            })
            try {
                doc.map(async (d) => {
                    const r = await Question.findOne({ documentname: d })
                    r.questions.map((e) => {
                        console.log(ids)
                        var ind = r.questions.indexOf(e)

                        if (ids.includes(e.id) === true) {
                            no_of_mquestions++
                            if (darray1.length < (6 * activepage)) {
                                darray1.push({ info: { id: e.id, question_title: e.question_title, index_no: e.index_no, documentname: e.documentname, time: e.time, username: e.username }, index: ind })
                                ids[e.id] = null

                            }
                        }
                    })
                })

            }
            catch (err) {
                console.log(err)
            }

        }
        console.log(darray1.length)

        res.send({ data: true })
    }
    catch (err) {
        console.log(err)
    }

    // async function help(){

    // function helper(){

    //     try{
    //         UserProfile.findOne({username:username})
    //         .then((result)=>{
    //             result.questions.map((each)=>{
    //                 // questionids.push({document:each.docname,id:each.question_id})
    //              console.log(each,"each")

    //                 try{
    //             Question.findOne({documentname:each.docname})
    //             .then((r)=>{
    //                 r.questions.map((e)=>{

    //                     var ind=r.questions.indexOf(e)
    //                     console.log(e,"e")
    //                     // console.log(e.id,each.question_id)
    //                      if(e.id==each.question_id){
    //                     if(darray.length<(6*activepage)){
    //                         darray1.push({info:e,index:ind})
    //                         no_of_questions++
    //                     }

    //                 console.log("push")
    //                        }
    //                 })
    //             })
    //                 }
    //                 catch(err){
    //                     console.log(err);
    //                 }
    //             })

    //             res.send({data:true})


    //         })

    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    //     return true;
    // }


    //     const r=await helper();

    // if(r){

    //     if(darray1.length>(6*(activepage-1))){
    //         darray1.splice(0,(6*(activepage-1)))
    //     }   


    // }



    // res.send({data:true})
    // }


    // help();


    // async function helper(){




    //     async function myq(dname,idx,i){
    //         var darray1=[]
    //         const result= await Question.findOne({documentname:dname})

    //             if(result){
    //                 result.questions.map((each)=>{
    //                 var ind=result.questions.indexOf(each)

    //                    if(each.id==idx){
    //                     darray1.push({info:each,index:ind})
    //                    }

    //                 })

    //             }






    //             no_of_questions=darray1.length;

    //             if(darray1.length>5*(activepage-1)){
    //                 darray1.splice(0,(5*(activepage-1)))
    //             }
    //          console.log(darray1,i)
    // if(i===questionids.length-1){
    //     console.log(darray1,"dd")
    //     questionids=[]
    //     return darray1;
    // }
    // else{

    //     return true;
    // }




    //         }





    // for(var i=0;i<questionids.length;i++)
    // {
    //     var dname=questionids[i].document
    //     var idx=questionids[i].id

    //     var r= myq(dname,idx,i)

    // if(typeof(r)==="object"){
    //     return r;
    // }

    // }







    // }

    // async function Newhelper(){



    // var f=await helper();
    // console.log(f,"h3")
    // if(f){
    //     try{
    //         if(f.length===0){
    //             f.push(null)

    //         }

    //        
    //         return;
    //         }
    //         catch(err){
    //             console.log(err);
    //         }
    // }
    // }


    // Newhelper();




})

var refreshcontroller = 2

router.get("/r/d", (req, res, next) => {

    if (refreshcontroller < 1) {
        refreshcontroller = 2
    }

    req.connection.setTimeout(1000 * 60 * 10);

})


router.get("/answer/:index/:document/:username", (req, res, next) => {

    try {
        Question.findOne({ documentname: req.params.document })
            .then((ques) => {

                res.send({ ans: ques.questions[req.params.index].answer })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    catch (err) {
        res.send(err)
    }


})

router.post("/addanswer", (req, res, next) => {
    var l;

    var id = uniqid(req.body.ansuser)
    console.log(req.body)

    try {
        Question.findOne({ documentname: req.body.document })
            .then((ques) => {

                if (ques.questions[req.body.index].answer.length === 0) {
                    l = 0
                }
                else {

                    l = ques.questions[req.body.index].answer.length

                }


                ques.questions[req.body.index].answer.push({
                    description: req.body.title,
                    ans: req.body.content,
                    userwhoanswerd: req.body.ansuser,
                    vote: false,
                    index: l,
                    id: id,
                    links: req.body.links,
                    images: req.body.imglinks
                })




                ques.save();
                res.send({ data: l })

                return
            })
            .catch(err => console.log(err));
    }
    catch (err) {
        res.send(err)
    }



    try {

        UserProfile.findOne({ username: req.body.ansuser })
            .then((result) => {
                var t = result.answered.length
                result.answered.push({
                    docname: req.body.document,
                    question_index: req.body.index,
                    answerindex: l,
                    index: t,
                    id: id
                })

                return result.save()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    catch (err) {
        console.log(err)
    }

})

var q = {}

router.post("/autodelete", async (req, res, next) => {





    try {
        Question.findOne({ documentname: req.body.document })
            .then((result) => {



                q = result.questions[req.body.index]

                try {
                    Question.findOne({ documentname: "extra" })
                        .then((result) => {
                            q.documentname = "extra"
                            result.questions.push(q)
                            result.save()

                        })
                }
                catch (err) {
                    console.log(err)
                }

                try {
                    UserProfile.findOne({ username: q.username })
                        .then((r) => {
                            r.questions.map((each) => {
                                if (each.question_id === q.id) {
                                    each.docname = "extra"


                                }
                            })
                            r.save()
                        })
                }
                catch (err) {
                    res.send(err)
                }

                if (q !== undefined) {
                    result.questions.splice(req.body.index, 1)
                    result.save()
                    res.send({ data: true })
                }


                return
            })
            .catch((err) => {
                console.log(err)
            })
    }
    catch (err) {
        console.log(err)
    }



})



// router.post("/autoupdate",(req,res,next)=>{



//     console.log(q,"j")



// q=""



// })

// router.post("autouserupdate",(req,res,next)=>{


// })


router.post("/vote", (req, res, next) => {

    req.connection.setTimeout(1000 * 60 * 10);


    Question.findOne({ documentname: req.body.document })
        .then((ques) => {

            ques.questions[req.body.index].answer[req.body.ansindex].vote = !(ques.questions[req.body.index].answer[req.body.ansindex].vote)
            return ques.save();
        })


})

router.post("/comment", (req, res) => {
    req.connection.setTimeout(1000 * 60 * 10);

    try {
        Question.findOne({ documentname: req.body.document })
            .then((ques) => {
                ques.questions[req.body.index].comments.push({ comment: req.body.comment, username: req.body.useronline })

                res.send({ data: true })
                return ques.save();
            })
            .catch(err => console.log(err))
    }
    catch (err) {
        console.log(err)

    }
})

router.post("/answercomment", (req, res) => {
    try {


        Question.findOne({ documentname: req.body.document })
            .then((q) => {
                q.questions[req.body.index].answer[req.body.ansindex].comments.push({ comment: req.body.comment, username: req.body.useronline })
                res.send({ data: true })
                return q.save();
            })
            .catch(err => console.log(err))
    }
    catch (err) {
        console.log(err)
    }
})


router.post("/delete/:username/:questionid", (req, res) => {
    req.connection.setTimeout(1000 * 60 * 10);

    try {
        Question.findOne({ documentname: req.body.document })
            .then((ques) => {
                ques.questions[req.body.index] = ques.questions[ques.questions.length - 1]
                ques.questions.pop()
                res.send({ data: true })
                return ques.save();
            })
    }
    catch (err) {
        console.log(err)
    }

    try {
        UserProfile.findOne({ username: req.params.username })
            .then((result) => {
                for (var i = 0; i < result.questions.length; i++) {
                    if (result.questions[i].question_id === req.params.questionid) {

                        result.questions[i] = result.questions[result.questions.length - 1]
                        result.questions.pop()
                        break;
                    }
                }
                return result.save()
            })
    }
    catch (err) {
        console.log(err)
    }
})


router.post("/codeeditor", (req, res) => {


    console.log(req.body)

    try {
        Question.findOne({ documentname: req.body.document })
            .then((result) => {
                result.questions[req.body.index].question_content = req.body.content;

                result.save()
                res.send({ data: true })
                return
            })
            .catch((err) => {
                res.send(err)
            })
    }
    catch (err) {
        res.send(err)
    }

})




router.post("/upvote/:state", (req, res) => {



    try {
        Question.findOne({ documentname: req.body.document })
            .then((result) => {


                if (req.params.state === "true") {
                    result.questions[req.body.index].answer[req.body.ansindex].upvote = result.questions[req.body.index].answer[req.body.ansindex].upvote + 1
                    result.questions[req.body.index].answer[req.body.ansindex].likedBy.push(req.body.username)
                }
                else if (req.params.state === "false") {
                    result.questions[req.body.index].answer[req.body.ansindex].upvote = result.questions[req.body.index].answer[req.body.ansindex].upvote - 1
                    var idx = result.questions[req.body.index].answer[req.body.ansindex].likedBy.indexOf(req.body.username)
                    result.questions[req.body.index].answer[req.body.ansindex].likedBy.splice(idx, 1)
                }

                result.save()
                res.send({ data: true })
                return
            })
    }
    catch (err) {
        console.log(err)
    }
})






module.exports = router;

