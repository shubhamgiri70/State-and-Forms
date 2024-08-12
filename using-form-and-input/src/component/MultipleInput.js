import React from "react";

class MultipleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInput = (event) => {
    let { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    alert(this.state.username + this.state.password);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            value={this.state.username}
            name="username"
            type="text"
            placeholder="enter your username"
            id="username"
            onChange={this.handleInput}
          />
          <label htmlFor="password">Password</label>
          <input
            value={this.state.passowd}
            type="password"
            placeholder="please inter the password"
            Password
            id="password"
            name="password"
            onChange={this.handleInput}
          />
          <input type="submit" id="submit" />
        </form>
      </>
    );
  }
}

export default MultipleInput;
