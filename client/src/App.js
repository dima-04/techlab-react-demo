import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import './App.css';
import { Container } from 'react-materialize';
import Nav from './components/Navbar';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import MyArticles from "./pages/MyArticles";

class App extends Component {

  constructor() {
    super();
    const token = localStorage.getItem("jwtToken");
    const decoded = token != null ? jwt_decode(token) : {};
    this.state = {
      user: decoded,
      token: token,
      redirect: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    const newState = {...this.state};
    newState.redirect = false;
    this.setState(newState);
  }

  handleLogin(token) {
    token = token.replace("Bearer ", "");
    localStorage.setItem("jwtToken", token);
    const decoded = jwt_decode(token);
    this.setState({user: decoded, token: token, redirect: true});
  }

  handleLogout() {
    localStorage.removeItem("jwtToken");
    this.setState({user: {}, token: null, redirect: true});
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render() {
    return (
      <Container>
        <Nav user={this.state.user}/>
        <h4>Welcome to the Newest Tech News!!</h4>
          <Router>
            {this.renderRedirect()}
            <div className="App">
              <Route exact path="/" component={() => <Home user={this.state.user} />} />
              <Route exact path="/myarticles" component={() => <MyArticles user={this.state.user} />} />
              <Route exact path="/register" component={() => <Register handleLogin={this.handleLogin}/>} />
              <Route exact path="/login" component={() => <Login handleLogin={this.handleLogin} />} />
              <Route exact path="/logout" component={() => <Logout logout={this.handleLogout} />} />
            </div>
          </Router>
      </Container>
    );
  }
}

export default App;
