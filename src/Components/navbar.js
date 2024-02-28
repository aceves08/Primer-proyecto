import React from 'react'
import Medalla from '../img/Medalla-mohinora.png'

export const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <div className="d-flex align-items-center"> 
                <img src={Medalla} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
                <span className="ms-2" style={{ fontFamily: 'abaddon', fontSize: '30px' }}>Mohinora</span> 
              </div>
            </a>
        </div>
    </nav>  
  )
}

export default Navbar;