import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarScroll" >
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item" >
          <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Link</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a href="/" className="nav-link disabled">Link</a>
        </li> */}
      </ul>
      <div className='d-flex'>
            <div className='bg-primary rounded mx-2' style={{height:'30px',widht:'30px'}}>
            </div>
        </div>
      <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggledata} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.mode==='dark'?'white':'black'}}>Default switch checkbox input</label>
        </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes={
    title: PropTypes.string 
}
Navbar.defaultProps={
    title : "Default title"
}