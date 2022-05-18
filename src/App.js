import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About'

function App() {

  const [mode, setMode] = useState('light') // Whther dark mode  is enabled or not
  const [modeText, setModeText] = useState('Enable Dark Mode');

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
  }


  // Start mode chaning function
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setModeText('Enable Light Mode')
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "white";
      document.title = "TextUtils - Dark Mode"
      showAlert("Dark of is enable sucessfully", "danger")

      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 2000)
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 1500)

    } else {
      setMode('light')
      setModeText('Enable Dark Mode')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black";
      document.title = "TextUtils - Light Mode"
      showAlert("Light of is enable sucessfully", "danger")
    }
  }
  // End mode chaning function

  return (
    <>
      {/* Using React Router for Navigation */}
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} modeText={modeText} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* <Routes> */}
        {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}  />} /> */}
        {/* <Route exact path="/about" element={< About/>} /> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
