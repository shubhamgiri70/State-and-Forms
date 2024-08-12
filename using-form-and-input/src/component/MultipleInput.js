import React from "react";

class MultipleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {
        email: "",
        password: "",
      },
    };
  }

  isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    const errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = this.isValidEmail(value) ? "" : "Email is not valid";
        break;
      case "password":
        errors.password =
          value.length < 6 ? "Password must be at least 6 characters" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your Email is: ${this.state.email} 
    Your Password is: ${this.state.password}
    `);
  };

  render() {
    const { email, password } = this.state.errors;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={this.state.email}
            name="email"
            type="email"
            placeholder="Enter your email"
            className={email ? "error" : ""}
            onChange={this.handleInput}
          />
          <span>{email}</span>

          <label htmlFor="password">Password</label>
          <input
            value={this.state.password}
            type="password"
            placeholder="Enter your password"
            className={password ? "error" : ""}
            name="password"
            onChange={this.handleInput}
          />
          <span>{password}</span>

          <input type="submit" id="submit" />
        </form>
      </>
    );
  }
}

export default MultipleInput;
