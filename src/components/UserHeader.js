import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class Userheader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    return <div>user Header</div>;
  }
}

export default connect(null, { fetchUser })(Userheader);
