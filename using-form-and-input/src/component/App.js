import React from "react";
// import FormInput from "./FormInput.js";
// import FormInputUn from "./FormInputUn.js";
import MultipleInput from "./MultipleInput";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <h1>Controlled Component</h1>
          {/* <FormInput /> */}
          {/* <FormInputUn /> */}
          <MultipleInput />
        </div>
      </>
    );
  }
}

export default App;
