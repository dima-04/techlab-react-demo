import React, { Component } from "react";
import { Navbar, NavItem ,Col,Button,Row} from 'react-materialize';
import "./style.css";

class Nav extends Component {
  render() {
    return (
        <Navbar className="navbar-color-design"
          alignLinks="right"
          brand={<a className="navbar" style={{ marginLeft:'5px'}}href="/">Tach Lab</a>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          <NavItem>
          <Row>
          <Col className="valign-wrapper">
              <Button node="button"style={{ marginRight: '5px'}} waves ="light">Scrape Articles </Button>
              <Button node="button"style={{ marginRight: '5px' }} waves ="light">Clear Articles </Button>
            </Col>
            </Row>
          </NavItem>
          <NavItem href="/login">
            Log In
          </NavItem>
          <NavItem href="/register">
            Register
          </NavItem>
          
        </Navbar>
    );
  }
}
export default Nav;