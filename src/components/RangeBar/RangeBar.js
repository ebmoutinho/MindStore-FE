import React from "react";
import InputRange from "react-input-range";
import "./input-range.css"

class RangeBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {
        min: 0,
        max: 1000
      },
    };
  }

  seeState(evt) {
    evt.preventDefault();
    console.log(this.state.value);
  }

  setMin(evt) {
    this.setState({
      value: { ...this.state.value, min: Number(evt.target.value) }
    });
  }

  setMax(evt) {
    this.setState({
      value: { ...this.state.value, max: Number(evt.target.value) }
    });
  }

  setRange(min, max) {
    this.setState({ value: { min, max } });
  }

  render() {
    return (
      <div className="range-bar-div">
        <form>
          <div className="input-range-wrapper">
            <InputRange
              maxValue={1000}
              minValue={0}
              value={this.state.value}
              onChange={value => this.setState({ value })}
              onChangeComplete={value => console.log(value)}
            />
          </div>
        </form>

      </div>
    );
  }
 }

export default RangeBar;