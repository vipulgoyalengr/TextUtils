// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message ,type)=>{
    setAlert({
      msg:message,
      type:type 
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const toggledata = ()=>{
    if (mode === 'dark'){
      setMode('light');
      document.body.style.background="white";
      showAlert("Light mode on","success");
    }
    else{
      setMode('dark');
      document.body.style.background="grey";
      showAlert("Dark mode on","success");

    }
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} toggledata={toggledata}  title="Text Utils" />
    <Alert alert={alert}/>

    <Routes>
          <Route exact path="/about" element={<About />}>
            
          </Route>
          <Route path="/" element={<TextForm mode={mode} heading="Enter the text to analyze"/>}>
          
          </Route>
        </Routes>
    <div className='container'>
    </div>
    </Router>
    </>

  );
}

export default App;
