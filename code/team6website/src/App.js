import './App.css';

//React Imports
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Media from 'react-media';
//BootStrap Imports
import { FormControl, Button, Form, NavItem, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//Light Mode and Dark Mode Imports
import { ThemeProvider} from "styled-components";
import { useDarkMode } from "./component/ColorSchemes/useDarkMode"
import { GlobalStyles } from "./component/ColorSchemes/GlobalStyles";
import { lightTheme, darkTheme } from "./component/ColorSchemes/Themes"
import Toggle from "./component/ColorSchemes/Toggler"

//Home Made Component imports
import NavigationBar from './component/NavigationBar';

//Page Imports
import Home from './component/page/Home';
import CarListing from './component/page/CarListing';
import PartListing from './component/page/PartListing';
import SingleCar from './component/page/SingleCar';
import SinglePart from './component/page/SinglePart';
import FindUs from './component/page/FindUs';
import Contact from './component/page/Contact';
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

      <Navbar sticky="top" className="justify-content-between nav-bar">

          <Navbar.Brand href="/home">SpeedFixSales</Navbar.Brand>

          {/* Hides search bar and its button for mobile devices is replaced by the one rendered in 'NavigationBar.js' */}
          <Media query="(max-width: 987px)">
                    { matches =>
                                matches ? (
                                    <div></div>
                                  ) : (
                                    <Form inline>
                                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                      <Button type="submit">Search</Button>
                                    </Form>
                                  )
                    }
          </Media>

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
          <Route path='/home'        exact component={Home} />
          <Route path='/carlisting'  exact component={CarListing} />
          <Route path='/partlisting' exact component={PartListing} />
          <Route path='/contact'     exact component={Contact} />
          <Route path='/findus'      exact component={FindUs} />
          <Route path='/singlecar'   exact component={SingleCar}/>
          <Route path='/singlepart'  exact component={SinglePart} />

          {/* If no match is made from the above urls match to Home */}
          <Route path='/' component={Home} />
        </Switch>
      </Router>
      {/* <SiteFooter></SiteFooter> */}
      </>
    </ThemeProvider>
  );
}

export default App;
