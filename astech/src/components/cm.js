import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';

import AceEditor from "react-ace";
 
import 'brace/mode/javascript';
import 'brace/theme/monokai';



const code = 'const a = 0;';
function CodeM(props){
 

// function handleEditorChange (content, editor) {
//     console.log('Content was updated:', content);
//   }
 
// function onChange(newValue) {
//   console.log("change", newValue);

// }

// function test(){
// var val=document.getElementById("test").
// console.log(val)
// }
  return(
    <div>


<AceEditor
mode="javascript" 
theme='monokai'
    
    onChange={props.Change}
   showPrintMargin={false}
   showGutter={false}
    editorProps={{ $blockScrolling: true }}
     name={props.name}  value={props.val}    placeholder={props.plh}
   style={{width:`${props.wdt}`, margin:"30px", height:`${props.hght}`}}
   readOnly={props.read}
  autofocus="autofocus"
  />

{/* <AceEditor
mode="javascript" 
theme='monokai'

    
   showPrintMargin={false}
   showGutter={false}
    editorProps={{ $blockScrolling: true }}
     name="test"     placeholder={props.plh}
   style={{width:`${props.wdt}`, margin:"30px", height:`${props.hght}`}}
   readOnly={props.read}
  autofocus="autofocus"
  />
 <button onClick={test}>HH</button> */}

{/* <Editor
apiKey="ivp8j1o5l98vcp2kowhvapc1eahkg9g2nzwqpuxvjjzcdpz5"
         initialValue="<p>This is the initial content of the editor</p>"
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }}
         onEditorChange={handleEditorChange}
       /> */}

{/* <CodeMirror
 name="title"    onChange={Change}  placeholder="Enter Question"

/>

<CodeMirror
 name="content"  onChange={Change} placeholder="Enter or Copy Code"

/> */}



    </div>
  )
}

export default CodeM;