import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { Container } from 'react-materialize';
import Nav from './components/Navbar';
import Home from "./pages/Home";

function App() {
  return (
    <Container>
      <Nav/>
      <h4>Welcome to the Newest Tech News!!</h4>
      <div className="largeContainer">
     
          <Router>
            <div className="App">
              <Route exact path="/" component={Home} />
              {/* <Switch>
                <PrivateRoute exact path="/" component={Home} />
              </Switch> */}
            </div>
          </Router>
      
      </div>
    </Container>
  );
}

export default App;
