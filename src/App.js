
import './App.css';
import NavBar from './Components/NavBar';


function App() {
  let titulo = "Hola Mundo";
  return (
    <div className="App">
      <header className="App-header">
        <h1>{titulo}</h1>
      </header>
      <NavBar />
    </div>
  ); 
}

export default App;
