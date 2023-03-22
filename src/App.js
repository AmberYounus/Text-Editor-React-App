
import './App.css';

import Navbar from './Components/Navbar.js';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  const [mode ,setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert] =useState(null);
  const  showAlert= (message,type)  =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  } 


  const removeBodyClasses =() =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-secondary');
  }
  const toggleMode = (cls) =>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' +cls);
    
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled" , "success")
   
    }else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert(" light mode has been enabled" , "success")
      // document.title ='TextUtils - Light Mode';
    }
  }
  return(
    <>
 

      <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode} />  
      <Alert alert={alert}/>
    <div className="container my-3">
   
            <Textform heading="TextEditor - Word Counter | Character Counter | Reverse Word | Copy Text 
      | Download Text | Remove Extra Spaces | Text to Speech " mode={mode} showAlert={showAlert}   />
     
    </div>

    
    </>
  );
}

export default App;
