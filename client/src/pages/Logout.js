import React, {Component} from "react";


class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return (
      <div><h1>You logged out</h1></div>
    );
  }
}

export default Logout;