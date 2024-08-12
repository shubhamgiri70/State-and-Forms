import React from "react";

class MultipleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      date: null,
      textarea: "",
      fileInput: "",
    };
    this.fileInput = React.createRef();
  }

  handleInput = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`text: ${this.state.textInput}
    and date: ${this.state.date} 
    selected file: ${this.state.fileInput.name}`);
  };

  handleChangeFile = (event) => {
    this.setState({
      fileInput: event.target.files[0],
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">Text Input</label>
          <input
            name="textInput"
            onChange={this.handleInput}
            value={this.state.textInput}
            id="text"
            type="text"
          />
          <label htmlFor="date">Date Input</label>
          <input
            name="date"
            onChange={this.handleInput}
            value={this.state.date}
            id="date"
            type="date"
          />
          <label htmlFor="file">File Input</label>
          <input
            onChange={this.handleChangeFile}
            ref={this.fileInput}
            name="fileInput"
            id="file"
            type="file"
          />
          <label htmlFor="read-only">Read-only Input</label>
          <input
            value={this.state.textInput}
            id="read-only"
            type="text"
            readOnly
          />
          <label htmlFor="disabled">Disabled Input</label>
          <input value={this.state.date} id="disabled" type="text" disabled />
          <label htmlFor="textarea">Textarea</label>
          <textarea
            name="textarea"
            onChange={this.handleInput}
            value={this.state.textarea}
            id="textarea"
            rows="5"
          />
          <label htmlFor="textarea-disabled">Textarea Disabled</label>
          <textarea
            value={this.state.textarea}
            id="textarea-disabled"
            rows="5"
            disabled
          />
          <input id="button" type="submit" />
        </form>
      </>
    );
  }
}

export default MultipleInput;
