import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTag, faUserShield } from "@fortawesome/free-solid-svg-icons"; // Corrected icon name

class Thirdweb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: "option1",
      additionalOption: "1",
    };
  }

  handleChange = (event) => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    alert("Form submitted!");
  };

  render() {
    return (
      <>
        <div className="main">
          <h1>Checkbox</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="checkbox-card-group">
              <label className="checkbox-card">
                <input
                  onChange={this.handleChange}
                  type="checkbox"
                  name="options"
                  value="option1"
                  checked={this.state.options === "option1"}
                />
                <div className="card-content">
                  <FontAwesomeIcon
                    icon={faUserTag}
                    style={{ color: "#5ba1d7" }}
                  />
                  <p>Option 1</p>
                </div>
              </label>
              <label className="checkbox-card">
                <input
                  onChange={this.handleChange}
                  type="checkbox"
                  name="options"
                  value="option2"
                  checked={this.state.options === "option2"}
                />
                <div className="card-content">
                  <FontAwesomeIcon
                    icon={faUserShield}
                    style={{ color: "#5ba1d7" }}
                  />
                  <p>Option 2</p>
                </div>
              </label>
            </div>
            <div className="checkbox-text-group">
              <label>
                <input
                  onChange={this.handleChange}
                  type="checkbox"
                  name="additionalOption"
                  value="1"
                  checked={this.state.additionalOption === "1"}
                />
                I want to add this option.
              </label>
              <label>
                <input
                  onChange={this.handleChange}
                  type="checkbox"
                  name="additionalOption"
                  value="2"
                  checked={this.state.additionalOption === "2"}
                />
                Let me click on this checkbox and choose some cool stuff.
              </label>
            </div>

            <hr />
            <div className="btns">
              <button onClick={this.props.prevStep} id="back-btn">
                Back
              </button>
              <button id="button" type="Submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Thirdweb;
