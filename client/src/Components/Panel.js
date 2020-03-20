import React, { Component } from "react";
import Top from "./Top";
import Bottom from "./Bottom";

class Panel extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgb(40,40,40)" }} className="panel">
        <Top />
        <Bottom />
      </div>
    );
  }
}

export default Panel;
