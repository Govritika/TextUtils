// import React from "react";
import React, {useState} from "react";

export default function TextForm(props) {
  const [text, setText]=useState("");
  const handleUpClick = ()=>{
    let newTxt=text.toUpperCase();
    setText(newTxt);
    props.showAlert("Converted to uppercase","success")
  }
  const handleLoClick = ()=>{
    let newTxt=text.toLowerCase();
    setText(newTxt);
    props.showAlert("Converted to lowercase","success")
  }
  const handleClearClick = ()=>{
    let newTxt="";
    setText(newTxt);
    props.showAlert("Text is cleared","success")
  }

  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"id="myBox" value={text} style={{backgroundColor: props.mode==='dark'?'#121212':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="10"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleUpClick}>Click to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleLoClick}>Click to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>Your text</h3>
      <p>Total {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}
