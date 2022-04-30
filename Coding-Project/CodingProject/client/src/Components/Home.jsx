import React, { useState } from "react";
import "./home.css"
import axios from "axios";

function Home(){

const [istate,setistate]=useState(false);
const [imgstate,setimgstate]=useState(false);
const [selectedFile,setselectedFile]=useState(null);
const [fileurl,setFile]=useState(null);

function setInput(event){
event.preventDefault()
if(istate===false){
    setistate(true);
}
else{
    setistate(false);
}
}

function setImage(event){
    event.preventDefault()
    if(imgstate===false){
        setimgstate(true);
    }
    else{
        setimgstate(false);
    }
}
function onFileSelected(event) {

    setselectedFile( event.target.files[0]);
    
  var selectFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("myimage");
  imgtag.title = selectFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectFile);
}


function OnClick(event){

event.preventDefault();

    let imageFormobj=new FormData();

    imageFormobj.append("file",selectedFile);
    
    
    // setFile({
    //     selectedFile:"DefaultImg"
    // })
    
    axios.post("http://localhost:5000/upload",imageFormobj)
    .then((data)=>{
    if(data.data.success){
        alert("Image has been successfully uploaded using multer");
       }
       
    })
    .catch(err=>console.log(err));
    
    // console.log(event.target.files[0]);
    


//     e.preventDefault();
//     let {name, imageUpload} = this.state;
//     let data = new FormData();
//     data.append('name', name);
//     data.append('imageUpload', imageUpload)
//     console.log(imageUpload)
//     axios({
//       method: 'post',
//       url: 'http://localhost:3030/uploadFile',
//       data: data,
//       headers: {
//         'Content-Type': 'mulTipart/form-data'
//       },
//   }).then(res =>{
//     console.log(res.data.create_upload)
//   })


}


    function ImageFile(event){

        
  
       
            return(
<div>
            <form action="#">
                <div >
           
                <input type="file"  onChange={onFileSelected} />
     
                <button type="submit" className="btn-btn-primary" onClick={OnClick} >Upload</button>
                <i className="img"  alt="UploadImage"/>
                
                </div>
                </form>
                </div>
            )
           
    
    }


return(
<div>
<button onClick={setInput} >Enter Code</button>   
{istate?<input className="inputclass"/>:null}
<button onClick={setImage}>UploadImage</button>
{imgstate?<ImageFile />:null}

</div>
)
}

export default Home

// URL.createObjectURL