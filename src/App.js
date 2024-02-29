import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import List_group from './Components/List_group';
import Carousel from './Components/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <List_group />
    </div>
  );
}

export default App;
