import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {products} from './products.js';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
//import ItemCount from './components/ItemCount.js';
//import ItemList from './components/ItemList.js';



function App() {
  return (
    <div className="App">
      <NavBar /> 
      <main className="App-main">
        <ItemListContainer greeting="Welcome to our store!">
          {/* <ItemCount stock="5" initial="1" />
          <ItemList products={products} /> */}
        </ItemListContainer>



      
        
      </main>

    </div>
  );
}

export default App;
