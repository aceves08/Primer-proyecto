import React from 'react'

const List_group = () => {
  return (
    <div class="row">
      <div class="col-4">
        <div id="list-example" class="list-group">
          <a class="list-group-item list-group-item-action" href="#list-item-1" style={{ fontFamily: 'abaddon II', fontSize: '20px' }}>1989</a>
          <a class="list-group-item list-group-item-action" href="#list-item-2" style={{ fontFamily: 'abaddon II', fontSize: '20px' }}>1990</a>
          <a class="list-group-item list-group-item-action" href="#list-item-3" style={{ fontFamily: 'abaddon II', fontSize: '20px' }}>1991</a>
          <a class="list-group-item list-group-item-action" href="#list-item-4" style={{ fontFamily: 'abaddon II', fontSize: '20px' }}>1992</a>
        </div>
      </div>
      <div class="col-8">
        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="10">
          <h4 id="list-item-1" style={{ fontFamily: 'abaddon II', fontSize: '20px' }}>1989</h4>
          <p>En julio Manuel Barrera, Javier Domínguez, Javier Valdés y Julio Macías le dan vida a la mística de Mohinora y 
            en septiembre se funda formalmente siendo su primer Coordinador Manuel Barrera, y Javier Valdés y Javier Domínguez 
            sus primeros Jefaturos, también se fundaron las dos primeras Escuadras: Troyanos y Egipcios cuyos Jefes fundadores 
            fueron Julio Macías y Rubén Ramírez, respectivamente.</p>
          <h4 id="list-item-2" style={{ fontFamily: 'abaddon II', fontSize: '20px' }}>1990</h4>
          <p>En enero Jaime de las Casas funda Etruscos. En septiembre hay cambio de coordinación, sale Manuel Barrera y entra 
            Carlos Luna, también sale Jaime de las Casas de Etruscos para entrar a Jefatura y en su lugar queda Enrique Sánchez.</p>
          <h4 id="list-item-3" style={{ fontFamily: 'abaddon II', fontSize: '20px' }}>1991</h4>
          <p>En abril Luis Carlos Domínguez funda Apaches; en julio Luis Carlos Domínguez pasa el mando de Apaches a Xavier 
            Hurtado. En agosto Enrique Sánchez deja Etruscos quedando como Jefe Rodolfo de las Casas. En septiembre Carlos 
            Luna termina su coordinación dejando el cargo del Escuadrón a Jaime de las Casas, también sale Julio Macías de 
            Troyanos, para unirse a la Jefatura, quedando como nuevo Jefe Juan Carlos Castillo.</p>
          <h4 id="list-item-4" style={{ fontFamily: 'abaddon II', fontSize: '20px' }}>1992</h4>
          <p>En abril Rubén Ramírez termina su trabajo como Jefe de Egipcios y los deja para entrar a Jefatura, dejando en 
            su lugar a Roberto Robles. En diciembre Enrique Sánchez funda la Escuadra Germanos.</p>
        </div>
      </div>
    </div>
  )
}

export default List_group;