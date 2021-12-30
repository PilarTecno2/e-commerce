import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Container } from 'react-bootstrap';
import { HeaderApp } from "./components/HeaderApp";
import { ListProducts } from './components/Products/Listroducts';
import { AlertProducts } from './components/Products/AlertProduct';

const App = () => {
  return (
    <Container>
      <div className="App">
        <AlertProducts/>
        <HeaderApp />
        <ListProducts />
      </div>
    </Container>
  );
}

export default App;