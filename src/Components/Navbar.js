import React from 'react'
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            {/* first prop type :tile  */}
  <a className="navbar-brand mx-3" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <a className="nav-link mx-1" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link mx-1" href="/about">{props.aboutText}</a>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0 pr-3">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
 </div>
    <div className="d-flex form-inline my-2 my-lg-0 pr-3">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px'
        ,width:'30px' ,cursor:'pointer'}} ></div>
         <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px'
        ,width:'30px' ,cursor:'pointer'}} ></div>
         <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px'
        ,width:'30px' ,cursor:'pointer'}} ></div>
         <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px'
        ,width:'30px' ,cursor:'pointer'}} ></div>
           <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}} style={{height:'30px'
        ,width:'30px' ,cursor:'pointer'}} ></div>
           <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}} style={{height:'30px'
        ,width:'30px' ,cursor:'pointer'}} ></div>
           <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMode('info')}} style={{height:'30px'
        ,width:'30px' ,cursor:'pointer'}} ></div>
           <div className="bg-secondary rounded mx-2" onClick={()=>{props.toggleMode('secondary')}} style={{height:'30px'
        ,width:'30px' ,cursor:'pointer'}} ></div>
    </div>
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id='flexSwitchCheckDefault' /> */}

      {/* <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" id='flexSwitchCheckDefault' />      */}
      {/* <label htmlFor="flexSwitchCheckDefault" className="form-check-label float-right"  >Toggle  Mode </label> */}

      {/* <label htmlFor="flexSwitchCheckDefault" className="form-check-label"  >Enable Dark Mode </label> */}
    </div>
  
 
</nav>
   
  )
}
// props
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,

}
// default props
Navbar.defaultProps ={
    title: 'set title here',
    aboutText: 'About'
}