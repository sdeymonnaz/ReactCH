import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar.js';
import ContentContainer from './components/ContentContainer.js';


function App() {
  return (
    <div className="App">
      <NavBar /> 
      <main className="App-main">
      <ContentContainer greeting="Welcome to our store!"/>
      
        
      </main>

    </div>
  );
}

export default App;
