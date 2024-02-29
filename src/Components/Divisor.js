import React from 'react'

const Divisor = ({Titulo}) => {
  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <span className="navbar-brand mb-0 h1" style={{ fontFamily: 'abaddon', fontSize: '30px' }}>{Titulo}</span>
        </div>
    </nav>
  )
}

export default Divisor