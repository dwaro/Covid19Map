import React, { Component } from "react";
import Chart from "./Chart";

class Bottom extends Component {
  render() {
    return (
      <div style={{ height: "50%", width: "100%", backgroundColor: "white" }}>
        <Chart />
      </div>
    );
  }
}

export default Bottom;
