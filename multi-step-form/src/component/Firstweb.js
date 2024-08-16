import React from "react";

class Firstweb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      dob: null,
      email: "",
      address: "",
      error: {
        email: "",
      },
    };
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    let errors = this.state.error;

    if (name === "email") {
      errors.email = this.validateEmail(value) ? "" : "Email is not valid";
    }

    this.setState({
      error: errors,
      [name]: value,
    });
  };

  validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.nextStep();
  };

  render() {
    return (
      <>
        <div className="main">
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-line">
              <label htmlFor="firstname">First Name</label>
              <input
                onChange={this.handleChange}
                value={this.state.firstname}
                name="firstname"
                id="firstname"
                type="Text"
                placeholder="Enter First Name"
              />
              <label htmlFor="lastname">Last Name</label>
              <input
                onChange={this.handleChange}
                value={this.state.lastname}
                name="lastname"
                id="lastname"
                type="Text"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="form-line">
              <label htmlFor="date">Date of Birth</label>
              <input
                onChange={this.handleChange}
                value={this.state.dob}
                name="dob"
                id="date"
                type="Date"
              />
              <label htmlFor="email">Email</label>
              <input
                onChange={this.handleChange}
                value={this.state.email}
                name="email"
                id="email"
                type="Email"
                placeholder="Enter your email"
              />
              <span>{this.state.error.email}</span>
            </div>
            <div className="form-line">
              <label htmlFor="address">Address</label>
              <input
                onChange={this.handleChange}
                value={this.state.address}
                name="address"
                id="address"
                type="Text"
                placeholder="Enter your address"
              />
            </div>
            <hr />
            <div className="submit-btn">
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

export default Firstweb;
