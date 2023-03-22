
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar.js';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import{
//   BrowserRouter as Router,
//   Route

// } from "react-router-dom";
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

  // const toggleMode = () =>{
  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#042743';
  //     showAlert(" Dark mode has been enabled" , "success")
  //     // document.title ='TextUtils - Dark Mode';
  //     // setInterval(() => {
  //     //   document.title ='TextUtils is Amazing Mode';
  //     // }, 2000);
  //     // setInterval(() => {
  //     //   document.title ='Install TextUtils Now';
  //     // }, 1500);
  //   }else{
  //     setMode('light');
  //     document.body.style.backgroundColor ='white';
  //     showAlert(" light mode has been enabled" , "success")
  //     // document.title ='TextUtils - Light Mode';
  //   }
  // }
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
     {/* pass props ,pass value*/}
{/* <Navbar title="TextUtils" aboutText = "About TextUtils"/>   */}
{/* <Navbar />   */}
  {/* <Router> */}
      <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode} />  
      <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Switch> */}
        {/* <Route exact path='/about'> */}
            {/* <About mode={mode}/> */}
        {/* </Route> */}
        {/* <Route exact path='/'> */}
            <Textform heading="TextEditor - Word Counter | Character Counter | Reverse Word | Copy Text 
      | Download Text | Remove Extra Spaces | Text to Speech " mode={mode} showAlert={showAlert}   />
          {/* </Route> */}
      {/* </Switch> */}
    </div>
  {/* </Router> */}
    
    </>
  );
}

export default App;
