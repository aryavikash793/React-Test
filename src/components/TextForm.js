import React, {useState} from 'react'

export default function TextForm(props) {
    // console.table(props);
    const [text, setText] = useState('text somthing here')
    // text="New Text";
    const handleUpClick = () =>{
        console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLoClick = () =>{
        console.log("Lowercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleClearClick = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
        props.showAlert("Clear All", "success")
    }
    // const handleCopyToClipboardClick = () => {
    //     navigator.clipboard.writeText(text).then(() => {
    //     // console.log('Text copied to clipboard');
    //       alert('Text copied to clipboard!');
    //         }).catch(err => {
    //         console.error('Failed to copy text: ', err);
    //     });
    // };
    
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
        // console.log(newText);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Spaces", "success")
    }
  return (
    <>
    <div className="container myclass" style={{color: props.mode=='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mt-3">
            <textarea name="textarea" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743' }} className="form-control" onChange={handleOnChange} id="textarea" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mt-3 mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mt-3 mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mt-3 mx-3" onClick={handleClearClick}>Clear</button>
        <button className="btn btn-primary mt-3 mx-3" onClick={handleCopyToClipboardClick}>Copy to Clipboard</button>
        <button className="btn btn-primary mt-3 mx-3" onClick={handleExtraSpace}>Remove Extra Space</button>
    </div>
    <div className="container mt-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Text Your Summery</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text Somthing to Preview it here."}</p>
    </div>
    </>
  )
}
