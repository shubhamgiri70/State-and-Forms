import React from "react";

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`your file is ${this.fileInput.current.files[0].name}`);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="file" ref={this.fileInput} />
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}

export default FormInput;
