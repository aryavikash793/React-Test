import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleClearClick = (event) =>{
        setText(event.target.value);
        props.showAlert("Clear All", "success")
    }
    const handleCopyToClipboardClick = () => {
        navigator.clipboard.writeText(text)
          .then(() => {
            props.showAlert("Text copied to clipboard!", "success");
          })
          .catch(err => {
            console.error('Failed to copy text: ', err);
          });
      };

      
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces", "success")
    }
  return (
    <>
    <div className="container myclass" style={{color: props.mode=='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mt-3">
            <textarea name="textarea" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743' }} className="form-control" onChange={handleOnChange} id="textarea" rows="3"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mt-3 mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mt-3 mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mt-3 mx-3" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mt-3 mx-3" onClick={handleCopyToClipboardClick}>Copy to Clipboard</button>
        <button disabled={text.length===0} className="btn btn-primary mt-3 mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container mt-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Text Your Summery</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to Preview"}</p>
    </div>
    </>
  )
}
