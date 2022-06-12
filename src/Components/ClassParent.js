import React from "react";
import ClassChild from "./ClassChild";

class ClassParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <label style={{ margin: "15px" }}>
          <strong>Enter Username : </strong>
        </label>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUsername}
        />
        <ClassChild username={this.state.username} />
      </div>
    );
  }
}

export default ClassParent;
