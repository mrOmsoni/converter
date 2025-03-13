import React,{useRef, useState} from 'react'
import Alert from './Alert';


export default function TextForm(props) {
  const HandleUpclick =()=>{
    console.log("Uppercase was clicked"+text);
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const HandleLowerclick=()=>{
    console.log("Lowercase was clicked"+text);
    let new1=text.toLowerCase();
    setText(new1);

  }
  const Handlecleartext=()=>{
    console.log("text is clear"+text)
    setText("");
  }
  const CopyClipBoard=()=>{
   var c=document.getElementById("exampleFormControlTextarea1");
   c.select();
   navigator.clipboard.writeText(c.value);
   }
    
    
  
  const HandleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }

  const [text,setText]=useState('Enter text here');
  const textRef=useRef(null);
   const [alert,setalert]=useState("om");
  return (
    <>

    <div className="contianer">
        <h1>{props.heading}</h1>
        <div className="container my-3">
            <textarea className="form-control" value={text}  onChange={HandleOnChange} style={{backgroundColor:props.mode==='light'?'gray':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2'onClick={HandleUpclick}>LowerToUpper</button>
        <button className='btn btn-primary mx-2'onClick={HandleLowerclick}>UpperToLower</button>
        <button className='btn btn-primary mx-2'onClick={Handlecleartext}>ClearText</button>
        <button className='btn btn-primary mx-2'onClick={CopyClipBoard}>Copy text</button>

    </div>

    <div className="container">
      <h1>Your text summary is here </h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:<Alert next={alert}/>}</p>
      
    </div>
    
    </>
  );
}

