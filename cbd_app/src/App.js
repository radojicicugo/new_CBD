import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BodyPage from './components/BodyPage';


function App() {
  return (
    <div className="App">
    <NavBar />
      <Router> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/bodypage" component={BodyPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
