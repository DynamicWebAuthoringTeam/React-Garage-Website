import './App.css';

//React Imports
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//BootStrap Imports
import { Container, Carousel, Dropdown, FormControl, Row, Column, Button, Alert, Breadcrumb, Card, Form, Col, NavItem, Nav, Navbar } from 'react-bootstrap'
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
import SiteFooter from './component/SiteFooter';

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

    //Allows for the changing from dark to light themes
    <ThemeProvider theme={themeMode}>
      <>

      {
        /* Allows for injection of CSS between dark and light theme */
      }
      <GlobalStyles/>

      {
        /* React default router */
      }
      <Router>

      {
        /* Brand Name, Logo, Searchbar and dark/light swtich and login/register */
      }
      <Navbar sticky="top" className="justify-content-between nav-bar">
          <Navbar.Brand href="/home">SpeedFixSales</Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button type="submit">Search</Button>
          </Form>
          <NavItem>
            <Navbar.Text>
              Signed in as: <a href="/login">Mark Otto</a>
            </Navbar.Text>
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </NavItem>
      </Navbar>

      {
        /* The NavigationBar is a traditional tab navigation */
      }
      <NavigationBar />

        {
          /* Defines which 'Page' to load into the main body for each of the urls */
        }
        <Switch>
          <Route path='/'            exact component={Home} />
          <Route path='/home'        exact component={Home} />
          <Route path='/carlisting'  exact component={CarListing} />
          <Route path='/partlisting' exact component={CarListing} />
          <Route path='/contact'     exact component={CarListing} />
          <Route path='/findus'      exact component={CarListing} />
        </Switch>
      </Router>
      <SiteFooter></SiteFooter>
      </>
    </ThemeProvider>
  );
}

export default App;
