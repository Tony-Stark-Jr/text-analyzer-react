import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'

function App() {

  const [mode, setMode] = useState('light') // Whether dark mode  is enabled or not
  const [modeText, setModeText] = useState('Enable Dark Mode');

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  // }


  // Start Dark mode chaning function
  const toggleMode = (cls) => {
    if (mode === 'light') {
      // removeBodyClasses();
      // document.body.classList.add('bg-' + cls)
      setMode('dark')
      setModeText('Enable Light Mode')
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "white";
      showAlert("Dark of is enable sucessfully", "success")

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
      showAlert("Light of is enable sucessfully", "success")
    }
  }

  return (
    <>
      {/* Using React Router for Navigation */}
      <BrowserRouter>
        <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} modeText={modeText} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading=" Try TextUtils - Word Counter, Character Counter, Remove extra Spaces" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
