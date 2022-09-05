import React,{useState} from 'react'
export default function TextForm(props) {
    const[text,setText]=useState("");
    const handleOnClickUpper=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleOnChange=(event)=>{
        // console.log(event.target.value)
        setText(event.target.value);

    }
    const handleOnClickClear=()=>{
        let newtext='';
        setText(newtext);
    }
    const handleOnClickLower=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const handleOnClickCopy=()=>{

        navigator.clipboard.writeText(text)
        document.getSelection().removeAllRanges();
    }
    const handleOnClickspace=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
  return (
<>
<div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className='my-2'>{props.heading}</h1>
      <div className="mb-3">
            {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
            <textarea className="form-control" id="mybox" onChange={handleOnChange} value={text} rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',
                color:props.mode==='dark'?'white':'black'}}></textarea>
        </div> 
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1" onClick={handleOnClickUpper}>Convert to Uppercase</button> 
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1" onClick={handleOnClickLower}>Convert to Lowercase</button> 
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1" onClick={handleOnClickClear}>Click to Clear</button> 
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1" onClick={handleOnClickCopy}>Click to Copy</button> 
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-1 " onClick={handleOnClickspace}>Click to Remove space</button> 



    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.length} Characters and {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>
    <h2>Summary</h2>
    <p>{text.length===0?"Nothing to preview":text}</p>
    </div>
</>
  )
}
