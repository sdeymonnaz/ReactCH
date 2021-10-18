import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount.js';


function App() {
  return (
    <div className="App">
      <NavBar /> 
      <main className="App-main">
        <ItemListContainer greeting="Welcome to our store!"/>
        <ItemCount stock="5" initial="1" />

      
        
      </main>

    </div>
  );
}

export default App;
