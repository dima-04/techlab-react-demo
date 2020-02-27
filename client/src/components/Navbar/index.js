import React, { Component } from "react";
import { Navbar, NavItem, Col, Button, Row } from 'react-materialize';
import "./style.css";

class Nav extends Component {
  render() {
    return (
      <div>{!this.props.user.id ? (
        <Navbar className="navbar-color-design"
          alignLinks="right"
          brand={<a className="navbar" style={{ marginLeft: '5px' }} href="/">Tach Lab</a>}
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
          <NavItem href="/login">
            Log In
          </NavItem>
          <NavItem href="/register">
            Register
          </NavItem>
        </Navbar>
      )
        : (
          <Navbar className="navbar-color-design"
            alignLinks="right"
            brand={<a className="navbar" style={{ marginLeft: '5px' }} href="/">Tach Lab</a>}
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
            <NavItem href="/myarticles">
              My Articles
          </NavItem>
            <NavItem href="/logout">
              Logout
          </NavItem>
          </Navbar>
        )}

      </div>
    );
  }
}
export default Nav;