
import './App.css';
import  Navbar  from "./components/Navbar";
import  TextForm  from "./components/TextForm";
import  Alert  from "./components/Alert";
import React, { useState } from 'react';
// import { type } from '@testing-library/user-event/dist/type';

// import  About  from "./About";
function App() {
  const[mode,setMode]=useState('light');//dark mode is enable or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({msg:message,
    type:type})
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }




  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been Enabled.","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled.","success");
      
    }
  }
  return (
    <>

<Navbar aboutText="About" title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>

<Alert alert={alert}></Alert>

<TextForm showAlert={showAlert} heading="Enter Text To Convert" mode={mode}></TextForm>

{/* <About></About> */}
    </>
  );
}

export default App;
