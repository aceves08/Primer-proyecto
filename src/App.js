import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import List_group from './Components/List_group';
import Carousel from './Components/Carousel';
import Divisor from './Components/Divisor';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Divisor Titulo="Historia de Mohinora"/>
      <List_group />
    </div>
  );
}

export default App;
