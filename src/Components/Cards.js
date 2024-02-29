import React from 'react'

export const Cards = ( {nombre, anio, mistica} ) => {
  return (
    <div className="card border-dark mb-3" style={{maxWidth: '18rem'}}>
        <div className="card-header">{anio}</div>
        <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text">{mistica}</p>
        </div>
    </div>
  )
}

export default Cards