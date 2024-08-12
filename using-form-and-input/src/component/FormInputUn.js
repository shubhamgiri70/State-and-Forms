import React from "react";

class FormInputUn extends React.Component {
  constructor(props) {
    super();
    this.text = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`your email is: ${this.text.current.value}`);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email :</label>
          <input type="email" placeholder="Enter your email" ref={this.text} />
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}

export default FormInputUn;
