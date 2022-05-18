import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    // text="new Text"; // Wrong way to change the state
    // setText=("new Text"); // Correct way to change the state

    const toAllUpperCase = () => {
        // console.log("Uppercasse was clicked");
        let upperCase = text.toUpperCase();
        setText(upperCase)
    }

    const toAllLowerCase = () => {
        // console.log("Uppercasse was clicked");
        // string.charAt(0).toUpperCase() + string.slice(1)
        // console.log("you click");
        let capitalText = text.toLowerCase();
        setText(capitalText)
    }

    const toClHandle = () => {
        let clText = "";
        setText(clText)
    }

    // const toSave = () => {
    //     localStorage.setItem(setText, Date.now());
    // }
    
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        console.log("hey");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        // console.log("Uppercasse was clicked");
        setText(event.target.value)
    }

    return (
        <div className='container my-3'>
            <div className="" >
                <h1>{props.heading}</h1>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'dark' }}></textarea>
                <button className="btn btn-primary my-3" onClick={toAllUpperCase}>CONVERT TO UPPERCASE</button>

                <button className="btn btn-primary my-3 mx-3" onClick={toAllLowerCase}>convert to lower</button>

                <button className="btn btn-primary my-3" onClick={toClHandle}>To clear</button>

                {/* <button className="btn btn-primary my-3 mx-3" onClick={toSave}>To Save</button> */}

                <button className="btn btn-primary my-3 mx-3" onClick={handleCopy}>To Copy</button>

                <button className="btn btn-primary my-3 mx-3" onClick={handleExtraSpace}>To extra remove spaces</button>




            </div>

            <div className='my-4'>
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters and {text.split(".").length - 1} sentences</p>
                <p>{text.split(" ").length * 0.008} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text :"Enter something in the textbox to preview it here"}</p>
            </div>
        </div>
    )
}
