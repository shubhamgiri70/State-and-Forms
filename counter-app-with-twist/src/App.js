import React from "react";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 5,
      max: 15,
    };
  }

  handleIncrement = () => {
    let { count, step, max } = this.state;
    this.setState({
      count: count + step > max ? count : count + step,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - this.state.step,
    });
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <>
        <center>
          <h1>{this.state.count}</h1>
          <div className="steps">
            <h3>Steps</h3>
            {[5, 10, 15].map((step) => (
              <button
                key={step}
                onClick={() => {
                  this.setState({ step: step });
                }}
                className={this.state.step === step ? "active--step" : ""}
              >
                {step}
              </button>
            ))}
          </div>
          <div className="steps">
            <h3>Max</h3>
            {[15, 100, 200].map((max) => (
              <button
                key={max}
                onClick={() => {
                  this.setState({ max: max });
                }}
                className={this.state.max === max ? "active--max" : ""}
              >
                {max}
              </button>
            ))}
          </div>
          <div className="buttons">
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
            <button onClick={this.handleReset}>Reset</button>
          </div>
        </center>
      </>
    );
  }
}

export default App;
