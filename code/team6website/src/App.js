import './App.css';
import React from 'react';
import NavigationBar from './component/NavigationBar';
import Home from './component/page/Home';
import CarListing from './component/page/CarListing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
    <NavigationBar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/carlisting' exact component={CarListing} />
      <Route path='/home' exact component={Home} />
      <Route path='/home' exact component={Home} />
    </Switch>
  </Router>
  );
}

export default App;
