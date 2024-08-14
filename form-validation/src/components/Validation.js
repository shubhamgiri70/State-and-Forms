import React from "react";

class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      error: {
        email: "",
        password: "",
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let errors = this.state.error;

    if (name === "email") {
      errors.email = this.isValidEmail(value) ? "" : "Email is not valid";
    }

    if (name === "password") {
      errors.password =
        value.length < 6 ? "Password cannot be less than 6 characters" : "";
    }

    this.setState({ error: errors, [name]: value });
  };

  isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.password !== this.state.confirmpassword) {
      alert("Your passwords do not match");
    } else {
      alert(`Your Username: ${this.state.username}
        Your Email: ${this.state.email}
        Your Password: ${this.state.password}`);
    }
  };

  render() {
    return (
      <>
        <h1>Register with us</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            value={this.state.username}
            name="username"
            type="text"
            id="username"
            placeholder="Enter your username"
            onChange={this.handleChange}
          />
          <span>
            {this.state.username.length < 4
              ? "Username must be more than 4 characters"
              : ""}
          </span>

          <label htmlFor="email">Email</label>
          <input
            value={this.state.email}
            name="email"
            type="email"
            placeholder="Enter your email"
            id="email"
            onChange={this.handleChange}
          />
          <span>{this.state.error.email}</span>

          <label htmlFor="password">Password</label>
          <input
            value={this.state.password}
            name="password"
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={this.handleChange}
          />
          <span>{this.state.error.password}</span>

          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            value={this.state.confirmpassword}
            name="confirmpassword"
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            onChange={this.handleChange}
          />
          <span>
            {this.state.password !== this.state.confirmpassword &&
            this.state.confirmpassword !== ""
              ? "Your passwords do not match"
              : ""}
          </span>

          <input id="button" type="submit" />
        </form>
      </>
    );
  }
}

export default Validation;
