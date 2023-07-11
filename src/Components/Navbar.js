import React from 'react';



export default function Navbar(props) {
  const closeNavbar = () => {
    document.getElementById("navCloseBtn").click()
  }
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"#083749"}}>
  <div className="container-fluid ">
    <a className="navbar-brand ms-1 ms-md-4 fs-3" href="#" style={{color:"#f0f0e6"}}>{props.name}</a>
    <button className="navbar-toggler" id='navCloseBtn' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <i className="bi bi-list text-light"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="ms-auto navbar-nav fs-5">
        <li className="nav-item mx-md-3">
          <a className="nav-link" aria-current="page" href="#" style={{color:"#f0f0e6"}}>Home</a>
        </li>
        
        <li className="nav-item mx-md-3">
          <a className="nav-link" href="#about" style={{color:"#f0f0e6"}} onClick={closeNavbar} >About</a>
        </li>
        <li className="nav-item mx-md-3">
          <a className="nav-link" href="#skills" style={{color:"#f0f0e6"}} onClick={closeNavbar}>Skills</a>
        </li>
        <li className="nav-item mx-md-3">
          <a className="nav-link" href="#portfolio" style={{color:"#f0f0e6"}} onClick={closeNavbar}>Portfolio</a>
        </li>
        <li className="nav-item mx-md-3">
          <a className="nav-link" href="#Contact" style={{color:"#f0f0e6"}} onClick={closeNavbar}>Contact </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
