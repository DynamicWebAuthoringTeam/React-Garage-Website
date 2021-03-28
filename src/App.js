import './App.css';

//React Imports
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import Media from 'react-media';

//BootStrap Imports
import { FormControl, Button, Form, NavItem, Navbar, Alert, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//Light Mode and Dark Mode Imports
// import { ThemeProvider} from "styled-components";
// import { useDarkMode } from "./component/ColorSchemes/useDarkMode"
// import { GlobalStyles } from "./component/ColorSchemes/GlobalStyles";
// import { lightTheme, darkTheme } from "./component/ColorSchemes/Themes"
// import Toggle from "./component/ColorSchemes/Toggler"

//Home Made Component imports
import NavigationBar from './component/NavigationBar';
import Context from './component/DataContext';

//Page Imports
import Home from './component/page/Home';
import CarListing from './component/page/CarListing';
import PartListing from './component/page/PartListing';
import SingleCar from './component/page/SingleCar';
import SinglePart from './component/page/SinglePart';
import FindUs from './component/page/FindUs';
import Contact from './component/page/Contact';
import SiteFooter from './component/SiteFooter';

class LoginStatus extends React.Component {
  static contextType = Context.UserContext;
  render(){
    if(this.context != null){
      return <NavItem><Navbar.Text>Signed in as:{this.context}</Navbar.Text></NavItem>;
    } else {
      return <NavItem><Navbar.Text><a href="/login">Sign in</a></Navbar.Text></NavItem>;
    }
  }
}

function App() {
  //Global State

  //TODO 3 lines have been copied
  // const [theme, themeToggler, mountedComponent] = useDarkMode();
  // const themeMode = theme === 'light' ? lightTheme : darkTheme;
  // if(!mountedComponent) return <div/>

  return (

    //Allows for the changing from dark to light themes
    // <ThemeProvider theme={themeMode}>
      <>
       <Context.ThemeContext.Provider value="dark">
    
      {
        /* Allows for injection of CSS between dark and light theme */
      }
      {/* <GlobalStyles/> */}

      {
        /* React default router */
      }
      <Router>

      <Navbar sticky="top" className="justify-content-between nav-bar">

          <Navbar.Brand href="/">Speed Fix Sales 
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
      <LoginStatus></LoginStatus>
      </Navbar>

      {
        /* The NavigationBar is a traditional tab navigation */
      }
        <NavigationBar />
        <Container>
            <Alert variant="info">
            <Alert.Heading>You are not logged in!</Alert.Heading>
                <p>
                    Welcome to SpeedFixSales website, we noticed you are not logged in! <br></br>
                    Please login or register with the buttons below! 
                </p>
                <hr />
                <p className="mb-0">
                    Click Here to Login/Register
                </p>
                <Button className="app-alert-button">Login</Button>
                <Button className="app-alert-button">Register</Button>
            </Alert>
        </Container>

        { /* Defines which 'Page' to load into the main body for each of the urls */ }
        <Switch>
          <Route exact path='/'      component={Home} />
          <Route path='/home'        component={Home} />
          <Route path='/carlisting'  component={CarListing} />
          <Route path='/partlisting' component={PartListing} />
          <Route path='/contact'     component={Contact} />
          <Route path='/findus'      component={FindUs} />
          <Route path='/singlecar'   component={SingleCar}/>
          <Route path='/singlepart'  component={SinglePart} />
        </Switch>
      </Router>
      {/* <SiteFooter></SiteFooter> */}
      </Context.ThemeContext.Provider>
      </>
  );
}

export default App;
