import React ,{useState} from 'react';
export default function Textform(props) {
    const handleUpClick = () =>{
      console.log("Uppercase was clicked" +text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert(" Converted to uppercase" , "success")
        // setText("You have clicked on handleUpclick");
    }   
    const handleToClick = () =>{
      console.log("Lowercase was clicked" +text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert(" Converted to lowercase" , "success")
    }
   
    const copyText = () => {
      navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges();
      props.showAlert(" Copy to clipboard" , "success")
    }
    const handleReverse = (event) => {
      /* Convert string to array*/
      let strArr = text.split("");
      strArr = strArr.reverse();
      /* Convert array to string*/
      let newText = strArr.join("");
      setText(newText);
      props.showAlert(" Converted into reverse" , "success")
    };
    const countWords = (text) => {
      let arr = text.split(" ");
      let newArr = arr.filter((word) => {
          return word!== String("");
      });
      return newArr.length;
  }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const handleclearClick = () =>{
      let newText = '';
      setText(newText);
      props.showAlert(" Clear the text" , "success")
    }
    const handleCapitalize = () => {
      let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
      setText(newText);
      props.showAlert(" captialize the first letter " , "success")
    }
    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert(" Remove Extra Space" , "success")
    }
    
    const handleOnChange =(event)=>{
      console.log("on change");
       setText(event.target.value);
    }
    const downloadtxtFile = () => {
      const element = document.createElement("a");
      const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
    props.showAlert(" file has been download" , "success")
    }


    const [text,setText] = useState('');
   // text ="new text "; //wrong way to change the state
   // setText("new Text"); //Correct way to cahnge the state
     return (
       <>
    <div className='container' style={{color:props.mode ==='dark'?'white':'#042743'}}  >
        <h1 className='mb-4'>{props.heading}</h1>
  {/* text is a state varaible iski default value hai..or set text is function to update a text state varaible */}

  <div className="form-group mb-3">  
    <textarea className="form-control" value ={text} onChange={handleOnChange} 
    style={{backgroundColor:props.mode ==='dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="3"></textarea>
  </div>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleToClick}>Convert to lowercase</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Captilize</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1"  onClick={handleReverse}>Reverse</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
  <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={speak}> Text to speech</button>
  <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={downloadtxtFile}>Download Text</button>
  <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={countWords}> Spaces</button>
    </div> 

    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#042743'}} >
      <h3 className='p-1 mb-2 bg-primary text-white text-center'> Text Summary </h3>
      <p>There are {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
      <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}  Minutes read</b></p>
      <h3 className='p-1 mb-2 bg-primary text-white text-center'>Preview your text</h3>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    
    </>
  )
}
