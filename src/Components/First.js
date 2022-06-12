import React from "react";
import Second from "./Second";

class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Constructor State",
    };
  }

  changeName = () => {
    this.setState({
      name: "Change Clicked",
    });
  };

  restoreName = () => {
    this.setState({
      name: "Constructor State",
    });
  };

  checkName = () => {
    return this.state.name === "Constructor State"
      ? "Default State"
      : this.state.name;
  };

  render() {
    return (
      <div>
        <span style={{ margin: "0px 0px 0px 20px" }} align="left">
          First.js Start Here ::
        </span>
        <span style={{ fontSize: "0px 0px 0px 20px" }}>
          Initial name is : <strong>{this.state.name}</strong>
        </span>
        <br />
        <button
          style={{ margin: "0px 0px 0px 20px" }}
          onClick={this.changeName}
        >
          Change
        </button>
        <button
          style={{ margin: "0px 0px 0px 20px" }}
          onClick={this.restoreName}
        >
          Restore
        </button>
        <p style={{ margin: "0px 0px 0px 20px" }} align="left">
          This is call to checkName Function. Output is from Second.js
        </p>
        <Second name={this.checkName()} />
        <p style={{ margin: "0px 0px 0px 20px" }} align="left">
          First.js Ends Here
        </p>
      </div>
    );
  }
}

export default First;
