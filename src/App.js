import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import List_group from './Components/List_group';

function App() {
  const año = 1952;
  return (
    <div className="App">
      <Navbar />
      <List_group />
    </div>
  );
}

export default App;
