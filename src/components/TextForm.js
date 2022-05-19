import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    // text="new Text"; // Wrong way to change the state
    // setText=("new Text"); // Correct way to change the state

    const toAllUpperCase = () => {
        // console.log("Uppercasse was clicked");
        let upperCase = text.toUpperCase();
        setText(upperCase)
        props.showAlert("Converted to uppercase!", "success");
    }

    const toAllLowerCase = () => {
        // console.log("Uppercasse was clicked");
        // string.charAt(0).toUpperCase() + string.slice(1)
        // console.log("you click");
        let capitalText = text.toLowerCase();
        setText(capitalText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const toClHandle = () => {
        let clText = "";
        setText(clText)
        props.showAlert("Text Cleared!", "success");
    }

    // const toSave = () => {
    //     localStorage.setItem(setText, Date.now());
    // }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }

    const handleOnChange = (event) => {
        // console.log("Uppercasse was clicked");
        setText(event.target.value)
    }

    return (
        <div className='container my-3'>
            <div className="" >
                <h1 className='mb-2'>{props.heading}</h1>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : 'dark' }}></textarea>
                <button disabled={text.length === 0} className="btn btn-primary mb-2 my-2" onClick={toAllUpperCase}>CONVERT TO UPPERCASE</button>

                <button disabled={text.length === 0} className="btn btn-primary mb-2 my-2 mx-2" onClick={toAllLowerCase}>convert to lower</button>

                <button disabled={text.length === 0} className="btn btn-primary mb-2 my-2" onClick={toClHandle}>To clear</button>

                {/* <button className="btn btn-primary my-3 mx-3" onClick={toSave}>To Save</button> */}

                <button disabled={text.length === 0} className="btn btn-primary mb-2 my-2 mx-2" onClick={handleCopy}>To Copy</button>

                <button disabled={text.length === 0} className="btn btn-primary mb-2 my-2" onClick={handleExtraSpace}>To extra remove spaces</button>




            </div>

            <div className='my-4'>
                <h1>Your text Summary</h1>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters and {text.split(".").length - 1} sentences</p>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length * 0.008} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing is preveiw!!!"}</p>
            </div>
        </div>
    )
}
