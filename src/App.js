import './App.css';

//React Imports
import React, { useState, useEffect } from "react";

// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Media from 'react-media';
//BootStrap Imports
import { FormControl, Button, Form, NavItem, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//Light Mode and Dark Mode Imports
// import { ThemeProvider} from "styled-components";
// import { useDarkMode } from "./component/ColorSchemes/useDarkMode"
// import { GlobalStyles } from "./component/ColorSchemes/GlobalStyles";
// import { lightTheme, darkTheme } from "./component/ColorSchemes/Themes"
// import Toggle from "./component/ColorSchemes/Toggler"

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

function App() {
  //TODO 3 lines have been copied
  // const [theme, themeToggler, mountedComponent] = useDarkMode();
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;
  // if(!mountedComponent) return <div/>

  return (

    //Allows for the changing from dark to light themes
    // <ThemeProvider theme={themeMode}>
      <>

      {
        /* Allows for injection of CSS between dark and light theme */
      }
      {/* <GlobalStyles/> */}

      {
        /* React default router */
      }
      {/* <Router> */}

      <Navbar sticky="top" className="justify-content-between nav-bar">

          <Navbar.Brand href="/home">Speed Fix Sales 
          {
            <img
              src="/images/logolong.png"
              width="100px"
              height="30px"
              className="d-inline-block align-top"
            />
           }
          </Navbar.Brand>

            {/* Hides search bar and its button for mobile devices is replaced by the one rendered in 'NavigationBar.js' */}
            <Media query="(max-width: 987px)">
                      { matches =>
                                  matches ? (
                                    // Render Empty div
                                      <div></div>
                                    ) : (
                                    // Render Search Form
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
            {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}
          </NavItem>

      </Navbar>

      {
        /* The NavigationBar is a traditional tab navigation */
      }
      <NavigationBar />

        {
          /* Defines which 'Page' to load into the main body for each of the urls */
        }
      <HashRouter basename='/Assignment/'>
        <Switch>
          <Route exact path='/'            component={Home} />
          <Route exact path='/carlisting'  component={CarListing} />
          <Route exact path='/partlisting' component={PartListing} />
          <Route exact path='/contact'     component={Contact} />
          <Route exact path='/findus'      component={FindUs} />
          <Route exact path='/singlecar'   component={SingleCar}/>
          <Route exact path='/singlepart'  component={SinglePart} />

          {/* If no match is made from the above urls match to Home */}
          {/* <Route path='/' component={Home} /> */}
        </Switch>
      </HashRouter>
      {/* TODO SiteFooter currently broken/ css/ somthing is messed up disabled for now */}
      {/* <SiteFooter></SiteFooter> */}
      </>
    /*{ </ThemeProvider> }*/
  );
}

export default App;
