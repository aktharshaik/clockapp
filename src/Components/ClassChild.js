import React from "react";

class ClassChild extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return <h2 style={{ margin: "15px" }}>{this.props.username}</h2>;
  }
}

export default ClassChild;
