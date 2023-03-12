import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Contact from './components/Contact';


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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
