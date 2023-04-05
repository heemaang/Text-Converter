import React, { useState } from 'react';
import * as FileSaver from 'file-saver'

export default function Textform(props) {
  const handleDownload = () => {
    const blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "myText.txt");
  }
  const handleUpClick = (event) => {
    event.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Upper Caser", "info")
  };
  const handleloClick = (event) => {
    event.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lower Caser", "info")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopyText = (event) => {
    navigator.clipboard.writeText(text)
      props.showAlert("Text has been copied", "info")
  };
  const handleClear = () => {
    setText("");
    props.showAlert("Text has been Cleared", "info")
  };
  
  const [textFont, setTextFont] = useState("");

  const handleTextFontChange = (font) => {
    setTextFont(font);
    props.showAlert("Font changed", "info")
  };

  const [text, setText] = useState('');
  return (
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2 className="my-1 mx-1">{props.heading}</h2>
      <div className="mb-3">    
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#353b42':'white',color: props.mode==='dark'?'white':'black', fontFamily: textFont}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
      <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert To LowerCase</button>
      <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy to clipboard</button>
      <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
      <button className="btn btn-primary dropdown-toggle my-1 mx-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" disabled={text.length===0} >
        Change Font
      </button>
        <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => setTextFont("Arial")}>Arial</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Verdana")}>Verdana</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Tahoma")}>Tahoma</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Times New Roman")}>Times New Roman</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Calibri")}>Calibri</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Cambria")}>Cambria</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Candara")}>Candara</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Century Gothic")}>Century Gothic</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Georgia")}>Georgia</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Garamond")}>Garamond</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Lucida Sans")}>Lucida Sans</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Palatino")}>Palatino</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Rockwell")}>Rockwell</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Segoe UI")}>Segoe UI</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Trebuchet MS")}>Trebuchet MS</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Verdana Pro")}>Verdana Pro</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Open Sans")}>Open Sans</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Roboto")}>Roboto</button></li>
            <li><button className="dropdown-item" onClick={() => setTextFont("Montserrat")}>Montserrat</button></li>
       </ul>
      <button disabled={text.length===0} type="submit" className="btn btn-primary mx-1 my-1" onClick={handleDownload}>Download Text</button>
              <div className="conatiner my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h3>Preview</h3>
        <div style={{ fontFamily: textFont }}>
          <p>{text.length >0 ? text : "Nothing to Preview"}</p>
        </div>
      </div>
      <p className="text-center text-decoration-underline" >Made by Heemaang</p>
    </div>
  )
}
