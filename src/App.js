import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import List_group from './Components/List_group';
import Carousel from './Components/Carousel';
import Divisor from './Components/Divisor';
import Cards from './Components/Cards';
import Maps_api from './Components/Maps_api';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Divisor Titulo="Historia de Mohinora"/>
      <List_group />
      <Divisor Titulo="Escuadras de Mohinora"/>
      <Cards nombre="Etruscos"  anio={1990} mistica="Azul, Amarillo, Negro, Blanco y Rojo"/>
      <Cards nombre="Cherokees" anio={2006} mistica="Verde, Negro, Blanco y Cafe"/>
      <Cards nombre="Romanos" anio={1995} mistica="Guinda y Azul"/>
      <Divisor Titulo="Ubicacion"/>
      {/* <Maps_api/>*/}
    </div>
  );
}

export default App;
