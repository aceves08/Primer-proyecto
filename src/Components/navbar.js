import React from 'react'
import Medalla from '/public/img/Medalla Mohinora.png'

export const navbar = () => {
  return (
    <nav classname="navbar bg-body-tertiary">
        <div classname="container-fluid">
            <a classname="navbar-brand" href="#">
            <img src={Medalla} alt="Logo" width="30" height="24" classname="d-inline-block align-text-top">
            Mohinora
            </a>
        </div>
    </nav>  
  )
}
