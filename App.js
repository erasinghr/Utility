import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
import Alert from "./components/Alert";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
      setAlert({
          message: message,
          type: type
      });
      setTimeout(() => {
          setAlert(null);
      }, 2000);
  }
  const toggleMode = () =>{
      if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = '#353839';
          showAlert("Dark mode has been enabled", "success");
      }
      else{
          setMode('light');
          document.body.style.backgroundColor = 'white';
          showAlert("Light mode has been enabled", "success");
      }
  }
  return (
      <>
          <Router>
              <Navbar title = "TextUtils" home= "Home"  mode={mode} toggleMode = {toggleMode} />
              <Alert alert = {alert} />
              <div className = "container my-3">
                  <Routes>
                      <Route exact path="/about" element={<About />} />
                      <Route exact path="/" element = {<TextForm showAlert = {showAlert} heading = "Enter the text to analyze" mode={mode} toggleMode = {toggleMode}/>}/>
                  </Routes>
              </div>
          </Router>
      </>
  );
}
export default App;
