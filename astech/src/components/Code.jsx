import React from "react";
import "./code.css"
import CodeM from "./cm"
import AceEditor from "react-ace";
 
import 'brace/mode/javascript';
import 'brace/theme/monokai';


function Code(props){

   
return(
    <div >
{/* <CodeM val={props.title} Change={props.onChange1} hght="60px" wdt="1200px" placeholder="Enter Answer Description"  />
<CodeM val={props.content} Change={props.onChange2} hght="500px" wdt="1200px" placeholder="Enter Answer Description"   /> */}
    <textarea className="htxt"  name="title" rows={2} cols={2}  value={props.title}  onChange={props.Change}  placeholder="Enter Answer Description"/>
    <textarea  className="txt" name="content" rows={10} cols={10} value={props.content} onChange={props.Change} placeholder="Enter or Copy Code"/>
     
    {/* <AceEditor
mode="javascript" 
theme='monokai'

    onChange={props.Change1}
   showPrintMargin={false}
   showGutter={false}
    editorProps={{ $blockScrolling: true }}
    id={props.i}   name='title'   value={props.title}    placeholder={props.plh}
   style={{width:`${props.wdt}`, margin:"30px", height:`${props.hght}`}}
   readOnly={props.read}
  />


<AceEditor
mode="javascript" 
theme='monokai'

    onChange={props.Change2}
   showPrintMargin={false}
   showGutter={false}
    editorProps={{ $blockScrolling: true }}
    id={props.i}   name="content"   value={props.content}    placeholder={props.plh}
   style={{width:`${props.wdt}`, margin:"30px", height:`${props.hght}`}}
   readOnly={props.read}
  /> */}

    </div>
)
    }

    export default Code;
