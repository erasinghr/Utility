import React, {useState} from 'react';

const TextForm = (props) =>{
    const[text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed!", "success");
    }
    const handleFirstCap = () =>{
        let newTextTemp = text.toLowerCase()
        let newText = newTextTemp.charAt(0).toUpperCase() + newTextTemp.slice(1);
        setText(newText);
        props.showAlert("First character converted to uppercase!", "success");
    }
    const handleVowelCheck = ()=>{
        const count = text.match(/[aeiou]/gi).length;
        setText(`There are ${count} vowels`);
        props.showAlert("Vowels counted!", "success");
    }



    const handleOnChange = (event) => {
        setText(event.target.value);
    }


    let words;
    if(text === ""){
        words = 0;
    }
    else{
        words = text.split(" ").length
    }
    return(
        <>
            <div className= "container" style = {{color: props.mode=== 'dark'?'white':'black'}}>
                <div className="mb-3">
                    <h1> {props.heading}</h1>
                    <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor: props.mode==='dark'? '#353839': 'white', color:props.mode=== 'dark'?'white': 'black'}} id="myBox" rows="8"/>
                </div>
                <button className= "btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className= "btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className= "btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleFirstCap}>Capitalize first character</button>
                <button className="btn btn-primary mx-1" onClick={handleVowelCheck}>Count Vowels</button>
            </div>
            <div className= "container my-2" style = {{color: props.mode=== 'dark'?'white':'black'}}>
                <h3> Your text summary</h3>
                <p> {words} words and {text.length} characters</p>
                <p> You will take {0.008 * words} minutes to read on average</p>
            </div>
        </>
    )
}
export default TextForm;