import React from "react";
const scaleNames = { c: "Celsius", f: "Fahrenheit" };

class TemperatureInput extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <div style={{ align: "left" }}>
        <span style={{ margin: "15px" }}>
          <strong>Enter temperature in {scaleNames[scale]} : </strong>
        </span>
        <span>
          <input value={temperature} onChange={this.handleChange} />
        </span>
      </div>
    );
  }
}

export default TemperatureInput;
