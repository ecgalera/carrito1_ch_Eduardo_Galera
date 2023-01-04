
import './App.css';
import ItemListContainers from './components/ItemListContainers';
import Navbars from './components/Navbars';

function App() {
  return (
    <div className="App">
     <Navbars/>
     <ItemListContainers mensaje="Soy una propiedad del Componente ItemListContainer.js"/>
    </div>
  );
}

export default App;
