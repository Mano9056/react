import React, { Component } from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Menu from "./component/menu";
import Home from './component/pages/home';
import Admin from "./component/pages/admin";
import Login from "./component/pages/login";
import Contact from "./component/contact";
import Service from "./component/service";

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      isLoggedIn: false,
    };
  }

  // Function to handle successful login
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const { isLoggedIn } = this.state; // Destructure state

    return (
      <Router>
        <Menu />
        <Switch>
          {/* Route to login page */}
          <Route path="/Login">
            <Login onLogin={this.handleLogin} />
          </Route>

          {/* Protect routes based on login status */}
         
            <>
              <Route exact path="/" component={Home} />
              <Route path="/Admin" component={Admin} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Service" component={Service} />
            </>
          
        </Switch>
      </Router>
    );
  }
}

export default App;
