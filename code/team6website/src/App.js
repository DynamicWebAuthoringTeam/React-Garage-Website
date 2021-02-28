import './App.css';
import React from 'react';
import NavigationBar from './component/NavigationBar';
import Home from './component/page/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <NavigationBar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/home' exact component={Home} />
      {/* 
      <Route path='/' exact component={Home} />
      <Route path='/' exact component={Home} /> 
      */}
    </Switch>
  </Router>
  );
}

export default App;
