import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  // componentDidMount() {
  //   this.intervalID = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  // }
  //
  // tick() {
  //   this.setState({
  //     time: new Date().toLocaleString(),
  //   });
  // }

  render() {
    return (
      <p>
        <h2>DATE - TIME : {this.state.time}</h2>
      </p>
    );
  }
}

export default Clock;
