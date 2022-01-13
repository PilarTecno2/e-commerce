import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderApp } from "./components/HeaderApp";
import { Home } from "./views/Home"
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { ProductView } from './views/ProductView';
import { PurchaseView } from './views/Purchase';

const App = () => {
  return (
    <>
      <HeaderApp />    
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/product/:id"} exact component={ProductView}/>
        <Route path={"/purchase"} exact component={PurchaseView}/>
        <Route render={() => <Redirect to = {"/"} />} />
        <Route render={() => <div> 404 pagina no encontrada </div>}/>
      </Switch>
    </>
  );
}

export default App;