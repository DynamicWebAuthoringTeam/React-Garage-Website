import './App.css';

//React Imports
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//BootStrap Imports
import { Container, Carousel, Row, Column, Button, Alert, Breadcrumb, Card, Form, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//Light Mode and Dark Mode Imports
import { ThemeProvider} from "styled-components";
import { useDarkMode } from "./component/ColorSchemes/useDarkMode"
import { GlobalStyles } from "./component/ColorSchemes/GlobalStyles";
import { lightTheme, darkTheme } from "./component/ColorSchemes/Themes"
import Toggle from "./component/ColorSchemes/Toggler"

//Home Made Component imports
import NavigationBar from './component/NavigationBar';
import Home from './component/page/Home';
import CarListing from './component/page/CarListing';

//Awesome Font Imports
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'


function App() {

  //TODO 3 lines have been copied
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if(!mountedComponent) return <div/>

  return (

    //TODO -- ThemeProvider,GlobalStyles,Toggle - HAS ALL BEEN COPIED WILL NEED RE-WORKED/RENAMED
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
      <Router>
        <NavigationBar />
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/carlisting' exact component={CarListing} />
          <Route path='/home' exact component={Home} />
          <Route path='/home' exact component={Home} />
        </Switch>
      </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
