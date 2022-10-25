import React,{ useState } from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Upper case was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upper case","success")
  }
  
  const handleLoClick=()=>{
    // console.log("Upper case was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lower case","success")
  }

  const handleClearClick=()=>{
    // console.log("Upper case was clicked"+text);
    let newText="";
    setText(newText)
  }

  const handleOnChange = (event)=>{
    
    // console.log("hiii");
    setText(event.target.value);
  }
  const [text, setText] = useState('enter text here');

  return (
    <div>
      <div className="container w-75 p-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>

        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea class="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
          style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
        </div>
        <div className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Convert to Upper case</div>
        <div className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lower case</div>
        <div className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</div>
      </div>

      <div className="container my-2 w-75 p-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h3>Your text summary :</h3>
        <p>{text.split(' ').filter((element)=>{return element.length !==0}).length} words and {text.length} character</p>
        <p>{0.008 * text.split(' ').length} Minutes read </p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </div>
  )
}
