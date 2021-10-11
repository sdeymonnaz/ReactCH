import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';


function App() {
  return (
    <div className="App">
      <NavBar /> 
      <main className="App-main">
      <ItemListContainer greeting="Welcome to our store!"/>
      
        
      </main>

    </div>
  );
}

export default App;
