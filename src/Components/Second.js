import React from "react";

class Second extends React.Component {
  // constructor(props){
  //     super(props)
  // }

  render() {
    const { name } = this.props;
    return (
      <React.Fragment>
        <span style={{ margin: "0px 0px 0px 20px" }}>Inside Second.js :: </span>
        <span>
          Click the 'Change' Button to Change State, 'Restore' Button to Restore
          State.
        </span>
        <h1 style={{ margin: "0px 0px 0px 20px" }}>{name}</h1>
      </React.Fragment>
    );
  }
}

export default Second;
