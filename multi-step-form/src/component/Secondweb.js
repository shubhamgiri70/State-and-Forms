import React from "react";

class Secondweb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      choice: 1,
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

    this.props.nextStep();
  };

  render() {
    return (
      <>
        <div className="main">
          <h1>Message</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="textarea">
              <label htmlFor="message">First Name</label>
              <textarea
                onChange={this.handleChange}
                value={this.state.message}
                name="message"
                id="message"
                rows="10"
                cols="50"
              />
            </div>
            <div className="radio-group">
              <label>
                <input
                  onChange={this.handleChange}
                  type="radio"
                  name="choice"
                  value="1"
                  checked={this.state.choice === "1"}
                />
                The number one choice
              </label>
              <label>
                <input
                  onChange={this.handleChange}
                  type="radio"
                  name="choice"
                  value="2"
                  checked={this.state.choice === "2"}
                />
                The number two choice
              </label>
            </div>
            <hr />
            <div className="btns">
              <button onClick={this.props.prevStep} id="back-btn">
                Back
              </button>
              <button id="button" type="Submit">
                Next Step
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Secondweb;
