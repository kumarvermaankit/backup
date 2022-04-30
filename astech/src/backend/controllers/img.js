
const express=require("express");
const cors= require("cors");
const mongoose=require("mongoose");
const multer=require("multer");

const router=express.Router();
const Question=require("../models/Question");
const UserProfile=require("../models/UserProfile.models");

const app= express();
app.use("./uploads",express.static('uploads'));
app.use(cors());
var uniqid = require('uniqid');





var darray=[];
var darray1=[];
var darray2=[];

var imgobject=[]

var storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        
        cb(null,"./uploads");
    },
    filename: (req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
    });

const fileFilter=(req,file,cb)=>{
    if(file.mimetype==='image.jpeg' || file.mimetype==='image.png' ){
        cb(null,true)
    }
    else{
       cb(null,false)
    }
}    

const upload=multer({
    storage:storage,
    limits:{
        fileSize:1024*1024*5
    }
    // fileFilter:fileFilter
})



// router.post("/id",(req,res,next)=>{
//     id_no=req.body.email;
//     console.log(req.body)
// })

router.post("/",upload.array("file",10),(req,res,next)=>{

try{
    req.files.map((each)=>{
        imgobject.push(each)
    })

  
}
catch(err){
console.log(err);
}    

// try{
// const newImage= new QImage({
//     id:id_no,
//     imgName:req.file.originalname,
//     imgData:req.file.path,
 
// })
// newImage.save()
// .then((result)=>{
//     console.log(result)
//     // res.json(200).json({
//     //     success:true,
//     //     document:result
//     // })
//     var edata=({
//         status:200,
//         success:true,
//         document:result
//     })
//     res.status(200).json(edata);
// })
// .catch((err)=>next(err));
// }
// catch(err){
//     console.log(err);
// }

})

// router.post("/add",(req,res,next)=>{

//     try{
//         UserProfile.findOne({email:id_no})
//         .then((res)=>{
//             res.images.push({
                
//             })
//             res.save();
//         })
//         .catch(err=>{console.log(err)})
//     }
//     catch(err){
//         console.log(err);
//     }
// })

router.post("/question",(req,res,next)=>{
    req.connection.setTimeout( 1000 * 60 * 10 );

    var index_no=0

    var id=uniqid(req.body.info.username)

    var time=new Date()

    var documentname;

    if((req.body.question.paymentinfo.amount)/100===10){
        documentname="gold"
    }
    else if((req.body.question.paymentinfo.amount)/100===5){
        documentname="silver"
    }
    else if((req.body.question.paymentinfo.amount)/100===3){
        documentname="bronze"
    }
    else{
        documentname="extra"
    }

    const newdocument={
        documentname:documentname,
        questions:[{
            imginfo:imgobject,
            question_title:req.body.question.title,
            question_content:req.body.question.content,
            answer:[],
        username:req.body.info.username,
        time:time,
        id:id,
        comments:[],
        value:req.body.question.paymentinfo,
        documentname:documentname,
        keywords:{
            language:req.body.keywords.languages,
            framework:req.body.keywords.frameworks,
            field:req.body.keywords.fields
        },
        index_no:index_no    
        }]
    }
    
    try{
        Question.findOne({documentname:documentname})
        
        .then((res)=>{
        
             if(!res || res===null){
                 Question.create(newdocument)
             }
            else{
                 index_no=res.questions.length;
                res.questions.push({
                    // imgName:imgobject.imagename,
                    // imgData:{
                    //     data:imgobject.imagename,
                    //     contentType:imgobject.imagefile.contentType
                    // },
                    imginfo:imgobject,
                    question_title:req.body.question.title,
                    question_content:req.body.question.content,
                    answer:[],
                username:req.body.info.username,
                time:time,
                id:id,
                    value:req.body.question.paymentinfo,
                    documentname:documentname,
                    keywords:{
                        language:req.body.keywords.languages,
                        framework:req.body.keywords.frameworks,
                        field:req.body.keywords.fields
                    },
                    index_no:index_no
                    
                })
                res.save();
             
           
            }
            
         
        })
      .catch(err=>console.log(err));
        
    }
    catch(err){
        console.log(err);
    }

try{
    UserProfile.findOne({email:req.body.info.email})
    .then((result)=>{
        result.questions.push({
            question_id:id,
            index_no:index_no,
            docname:documentname
        })
        result.save();
    })
  
}
catch(err){
console.log(err)
}





})

var activepage=1;
var no_of_questions=0;

router.post("/activepage",(req,res,next)=>{
activepage=req.body.pageNumber;
})

router.get("/",(req,res,next)=>{
    req.connection.setTimeout( 1000 * 60 * 10 );
  
 
  
   async function Main(){
    try{     
       const result= await Question.find()
        result.map(res=>{
                res.questions.map((each)=>{
                    if(darray.length<(10*activepage)){
                        darray.push(each) 
                       no_of_questions++;
                    }
                })
          
       
            
            if(darray.length>10*(activepage-1)){
                darray.splice(0,(10*(activepage-1)))
            }

            

        
        // if(darray.length>=0 && darray.length<=size){
        //     darray.push({questions:res.questions,username:res.username})
        // }   
        
        
        
               
        })
        
        
        
        
        }
        catch(err){
        console.log(err);
        }

      return darray
    }
      
    Main()
    .then((darr)=>{
        try{
            res.send({arr:darr,pagenumber:activepage,no_of_questions:no_of_questions});
        darray=[];
        refreshcontroller--
        no_of_questions=0;
        }
        catch(err){
            console.log(err);
        }
    })

   
    
// darray=[{
//     questions:[],
//     username:""
// }];


})

router.get("/search/:field/:language/:framework/:string",(req,res,next)=>{
    req.connection.setTimeout( 1000 * 60 * 10 );
 

var lstr=req.params.language;
lstr=lstr.split(",")
for(var i=0;i<lstr.length;i++){
    if(lstr[i]==="C  "){
        lstr[i]="C++"
    }
}
 var fstr=req.params.field;
 fstr=fstr.split(",")

 var frstr=req.params.framework;
 frstr=frstr.split(",")

Question.find()
.then((result)=>{
    if(result){
    result.map((each)=>{
        each.questions.map((res)=>{
            var count=0
            if(darray2.length<(10*activepage)){
                if(res.keywords["field"]!==null){
                res.keywords["field"].map((f)=>{
                    fstr.map((each)=>{
                        
                        if(f.value===each){
                            darray2.push(res)
                            count++
                        }
                    })
                })
            }
                if(count>0){
                    return
                }
                if(res.keywords["language"]!==null){
                res.keywords["language"].map((l)=>{
                    lstr.map((each)=>{
                         

                        if(l.value===each){
                            darray2.push(res)
                            return
                        }
                    })
                })
            }
                if(count>0){
                    return
                }
                if(res.keywords["framework"]!==null){
                res.keywords["framework"].map((f)=>{
                    frstr.map((each)=>{
                        if(f.value===each){
                            darray2.push(res)
                            return
                        }
                    })
                })
            }
                if(count>0){
                    return
                }
                   
            
                 var array=[];
                 var nof=0
                 array=req.params.string.split(" ");
                
                 var notincludearray=["what","which","how","is","are"]

                 for(var i=0;i<array.length;i++){
                     if(array[i].length>2){
                     if((res.question_title.toLowerCase()).includes(array[i].toLowerCase())&&notincludearray.includes(array[i].toLowerCase())===false){
                          darray2.push(res);
                         return;
                        }
                    }
                 
                 }
           
                
             
            }
            
        })
    })
}
else{
    res.send("No search results found")
}
if(darray2.length===0){
    darray2.push(null)
}
no_of_questions=darray2.length;

if(darray2.length>10*(activepage-1)){
    darray2.splice(0,(10*(activepage-1)))
}
try{
    res.send({arr:darray2,pagenumber:activepage,no_of_questions:no_of_questions});
darray2=[];

no_of_questions=0;
}
catch(err){
    console.log(err);
}
})
})

router.get('/mq/:username',(req,res,next)=>{
var username=req.params.username;


UserProfile.findOne({username:username})
.then((result)=>{
    res.send({questions:result.questions})
})
})

router.get("/myquestions/:index",(req,res,next)=>{
    req.connection.setTimeout( 1000 * 60 * 10 );
    
var index=req.params.index
index=index.split(",")

    
    async function myq(dname,idx){

        const result= await Question.find({documentname:dname})
        
            if(result){
                result.map((each)=>{
               darray1.push(each.questions[idx])
                })
                // result.map((each)=>{
                //     each.questions.map((e)=>{
                //         if(darray.length<(10*activepage)){
                //         if(e.username===username){
                //             darray.push(e)
                //         }
                //     }
                //     })
                // })
            }
            else{
                res.send("No search results found")
                darray1.push(null)
            }
            if(darray1.length===0){
                darray1.push(null)
            }
            no_of_questions=darray1.length;
            
            if(darray1.length>10*(activepage-1)){
                darray1.splice(0,(10*(activepage-1)))
            }
         
         
        }


for(var i=0;i<index.length;i++){
var doc_idx=index[i].indexOf("e")

var dname=index[i].substr(doc_idx+1);

var idx=Number(index[i][doc_idx-7])


myq(dname,idx)



}



try{
res.send({arr:darray1,pagenumber:activepage,no_of_questions:no_of_questions});
darray1=[];

no_of_questions=0;
}
catch(err){
    console.log(err);
}

})

var refreshcontroller=2

router.get("/r/d",(req,res,next)=>{
   console.log(darray.length);
    if(refreshcontroller<1){
        refreshcontroller=2
    }

    req.connection.setTimeout( 1000 * 60 * 10 );
   
})

router.post("/addanswer",(req,res,next)=>{
    var l;

    req.connection.setTimeout( 1000 * 60 * 10 );
    Question.findOne({documentname:req.body.document})
    .then((ques)=>{
 
        if(ques.questions[req.body.index].answer.length===0){
l=0
        }
else{
    l=ques.questions[req.body.index].answer.length-1

}

        ques.questions[req.body.index].answer.push({
            description:req.body.title,
            ans:req.body.content,
            userwhoanswerd:req.body.ansuser,
            vote:false,
            index:l
        })
           
         
          
       
        ques.save();
        res.send({data:l})

        return 
    })
    .catch(err=>console.log(err));
    
})

router.post("/vote",(req,res,next)=>{

    req.connection.setTimeout( 1000 * 60 * 10 );
    
    console.log(req.body)
   Question.findOne({documentname:req.body.document})
    .then((ques)=>{
     
        ques.questions[req.body.index].answer[req.body.ansindex].vote=!(ques.questions[req.body.index].answer[req.body.ansindex].vote)
        return ques.save();
  })
       
    
})

router.post("/comment",(req,res)=>{
    req.connection.setTimeout( 1000 * 60 * 10 );
  
    try{
    Question.findOne({documentname:req.body.document})
    .then((ques)=>{
        ques.questions[req.body.index].comments.push({comment:req.body.comment,username:req.body.useronline})
           
       
        return ques.save();
    })
    .catch(err=>console.log(err))
}
catch(err){
    console.log(err)

}
})

router.post("/delete/:username/:questionid",(req,res)=>{
    req.connection.setTimeout( 1000 * 60 * 10 );
    
try{
    Question.findOne({documentname:req.body.document})
    .then((ques)=>{
        ques.questions[req.body.index]=ques.questions[ques.questions.length-1]
        ques.questions.pop()

        return ques.save();
    })
}
catch(err){
console.log(err)
}

try{
    UserProfile.findOne({username:req.params.username})
    .then((result)=>{
     for(var i=0;i<result.questions.length;i++){
         if(result.questions[i].question_id===req.params.questionid){
             
             result.questions[i]=result.questions[result.questions.length-1]
             result.questions.pop()
             break;
         }
     }
     return result.save()
    })
}
catch(err){
console.log(err)
}
})

router.post("/upvote/:state",(req,res)=>{
    console.log(req.body)
    console.log(req.params)
    try{
        Question.findOne({documentname:req.body.document})
        .then((result)=>{
            
            if(req.params.state==="true"){
                result.questions[req.body.index].answer[req.body.ansindex].upvote=result.questions[req.body.index].answer[req.body.ansindex].upvote+1
            }
            else if(req.params.state==="false"){
                result.questions[req.body.index].answer[req.body.ansindex].upvote=result.questions[req.body.index].answer[req.body.ansindex].upvote-1
            }
        
      return  result.save()
        })
    }
    catch(err){
        console.log(err)
    }
})


module.exports=router;

// 