import React,{useRef, useState} from 'react'
import Alert from './Alert';


export default function Home(props) {
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
        <div className="container my-3">
        <h1>{props.heading}</h1>
         <textarea className="form-control" value={text}  onChange={HandleOnChange} style={{backgroundColor:props.mode==='light'?'gray':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
        
        <button className='btn btn-primary my-3 mx-1'onClick={HandleUpclick}>LowerToUpper</button>
        <button className='btn btn-primary my-3 mx-1'onClick={HandleLowerclick}>UpperToLower</button>
        <button className='btn btn-primary my-3 mx-1'onClick={Handlecleartext}>ClearText</button>
        <button className='btn btn-primary my-3 mx-1'onClick={CopyClipBoard}>Copy text</button>
        </div>

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

