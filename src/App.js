import './App.css';

//React Imports
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import { useHistory } from "react-router"
import Media from 'react-media';

//BootStrap Imports
import { FormControl, Button, Form, NavItem, Navbar, Alert, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
import Login from './component/page/Login';
import Register from './component/page/Register';
import Profile from './component/page/Profile';
import RegistrationSuccess from './component/page/RegistrationSuccess';


//Import Context and history
import { Context } from "./component/Context.js";

function App() {
  let history = useHistory()
  const [displayNotLoggedIn, setDisplayNotLoggedIn] = useState(true);
  const [user, setUser] = useState(null);
  const [searchInput, setSearchInput] = useState(null);
  

  function searchLogic(inputString){
  
    if(inputString === 'parts' || inputString === 'parts'){
      return '/partlisting'
    }

  }
  

  /*
    Class LoginStatus
    Either renders the logged in users, user controls or a link to the sign page.
  */
  class LoginStatus extends React.Component {
    static contextType = Context;

    render() {
      if (this.context[0] === null) {
        return <NavItem><Navbar.Text style={{color:"white"}} as={NavLink} to="/login" >Sign in</Navbar.Text></NavItem>;
      } else {
        return <NavItem className="app-user-controls">
                  <Row>
                    <Navbar.Text className="app-nav-bar-text" style={{color:"white"}}>Signed in as: </Navbar.Text>
                    <DropdownButton id="dropdown-basic-button" title={this.context[0].firstName}>
                    <Dropdown.Item as={NavLink} to="/profile">view profile</Dropdown.Item>
                    <Dropdown.Item href="home">logout</Dropdown.Item>
                    </DropdownButton>
                  </Row>
          </NavItem>;
      }
    }
  }

  /*
    Class AlertNotLoggedIn
    Renders a notification to the user to login if, they are not logged in.
    Resource Reference: https://react-bootstrap.netlify.app/components/alerts/#additional-content
  */
  class AlertNotLoggedIn extends React.Component {
    static contextType = Context;
    
    render() {
      //display if not logged in, but not when on the login or register parge.
      if (displayNotLoggedIn && this.context[0] === null) {
        return (
          <Container>
            <Alert variant="info" onClose={ () => setDisplayNotLoggedIn(false) } dismissible>
              <Alert.Heading>You are not logged in!</Alert.Heading>
              <p>
                Welcome to SpeedFixSales website, we noticed you are not logged in! 
                <br></br> 
                Please login or register with the buttons below!
              </p>
              <hr />
              <p className="mb-0">Click Here to Login/Register</p>
              <Button variant="info" className="app-alert-button" as={NavLink} to="/login">Login</Button>
              <Button variant="info" className="app-alert-button" as={NavLink} to="/register">Register</Button>
            </Alert>
          </Container>
        );
      }
      return (<div></div>);
    }
  }

  return (
    <>
      {/*
        Class Context.Provider
        Resource Reference: https://reactjs.org/docs/context.html
      */}
      <Context.Provider value={[user, setUser]}>
        <Router>
          {/* 
            Class <Navbar></Navbar>
            Resource Reference: https://react-bootstrap.netlify.app/components/navbar/
          */}
          <Navbar sticky="top" className="justify-content-between nav-bar">
            <Navbar.Brand style={{color:"white"}}>
              {<img src="/images/logolong.png" alt="SpeedFixSales Logo" width="200px" height="70px" className="d-inline-block align-top"/>}
            </Navbar.Brand>
            {/* Hides search bar and its button for mobile devices is replaced by the one rendered in 'NavigationBar.js' */}
            <Media query="(max-width: 987px)">
              {isMatch =>
                isMatch ? (
                  <div></div>
                ) : (
                      <Form inline>
                        <FormControl 
                          type="text" 
                          placeholder="Search" 
                          className="mr-sm-2" 
                          value={searchInput}
                          onChange={e => { setSearchInput(e.target.value) }}
                        />
                        <Button variant="primary" 
                          onClick={event => {
                            console.log(searchInput);
                            // history.push("/home")
                          }
                          }
                        >
                          Search
                        </Button>
                      </Form>
                    )
              }
            </Media>

            { /* Displays the logged in user in the header bar. */ }
              <LoginStatus></LoginStatus>
          </Navbar>

          { /* The NavigationBar is a traditional tab navigation */ }
          <NavigationBar />

          {/* An Alert at the top of every page to inform the user they are not logged in */}
          <Container>
            <AlertNotLoggedIn></AlertNotLoggedIn>
          </Container>

          { /* 
            Defines which 'Page' to load into the main body for each of the urls 
            Resource Reference: https://reactrouter.com/web/api/Switch
          */}
          <Switch>
            <Route exact path='/'         component={Home}               />
            <Route path='/home'           component={Home}               />
            <Route path='/carlisting'     component={CarListing}         />
            <Route path='/partlisting'    component={PartListing}        />
            <Route path='/contact'        component={Contact}            />
            <Route path='/findus'         component={FindUs}             />
            <Route path='/singlecar'      component={SingleCar}          />
            <Route path='/singlepart'     component={SinglePart}         />
            <Route path='/login'          component={Login}              />
            <Route path='/register'       component={Register}           />
            <Route path='/profile'        component={Profile}            />
            <Route path='/registersuccess'component={RegistrationSuccess}/>
          </Switch>
        </Router>
      </Context.Provider>
    </>
  );
}

export default App;
