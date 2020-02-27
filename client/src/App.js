import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import './App.css';
import { Container } from 'react-materialize';
import Nav from './components/Navbar';
import Home from "./pages/Home";
import Register from "./pages/Register";

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null,
      token: null
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(token) {
    token = token.replace("Bearer ", "");
    const decoded = jwt_decode(token);
    this.setState({user: decoded, token: token});
  }

  render() {
    return (
      <Container>
        <Nav />
        <h4>Welcome to the Newest Tech News!!</h4>
        <div className="largeContainer">

          <Router>
            <div className="App">
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={() => <Register handleLogin={this.handleLogin}/>} />
              {/* <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} /> */}
            </div>
          </Router>

        </div>
      </Container>
    );
  }
}

export default App;
