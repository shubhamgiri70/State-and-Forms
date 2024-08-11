import React from "react";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      setText: "",
      setSlider: "16",
    };
  }

  handleTextChange = (event) => {
    this.setState({ setText: event.target.value });
  };

  handleSliderChange = (event) => {
    this.setState({ setSlider: event.target.value });
  };

  handleClear = () => {
    this.setState({
      setText: "",
      setSlider: "16",
    });
  };

  render() {
    const fonts = [
      "Arial, sans-serif",
      "Georgia, serif",
      "Courier New, monospace",
      "Tahoma, sans-serif",
      "Verdana, sans-serif",
      "Times New Roman, serif",
      "Trebuchet MS, sans-serif",
      "Lucida Console, monospace",
      "Garamond, serif",
      "Comic Sans MS, cursive",
    ];

    return (
      <>
        <div className="wrapper">
          <div className="header">
            <h1>Font Tester</h1>
          </div>
          <input
            value={this.state.setText}
            onChange={this.handleTextChange}
            type="text"
            id="input"
            placeholder="Enter your text"
          />
          <button onClick={this.handleClear}>Clear</button>
          <label>
            Font Size: {this.state.setSlider}px
            <input
              onChange={this.handleSliderChange}
              type="range"
              min="10"
              max="50"
              value={this.state.setSlider}
            />
          </label>
        </div>
        <div className="font-display">
          {fonts.map((font, index) => (
            <div
              key={index}
              className="font-card"
              style={{
                fontFamily: font,
                fontSize: `${this.state.setSlider || 16}px`,
              }}
            >
              <p>{this.state.setText}</p>
              <span>{font.split(",")[0]}</span>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
