import React from "react";
import Firstweb from "./component/Firstweb.js";
import Secondweb from "./component/Secondweb.js";
import Thirdweb from "./component/Thirdweb.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentstep: 1, // Keep this consistent
    };
  }

  nextStep = () => {
    let { currentstep } = this.state; // Use currentstep
    if (currentstep < 3) {
      this.setState({
        currentstep: currentstep + 1, // Update state correctly
      });
    }
  };

  prevStep = () => {
    let { currentstep } = this.state; // Use currentstep
    if (currentstep > 1) {
      this.setState({
        currentstep: currentstep - 1, // Update state correctly
      });
    }
  };

  render() {
    const { currentstep } = this.state; // Use currentstep
    return (
      <>
        {currentstep === 1 && <Firstweb nextStep={this.nextStep} />}
        {currentstep === 2 && (
          <Secondweb nextStep={this.nextStep} prevStep={this.prevStep} />
        )}
        {currentstep === 3 && <Thirdweb prevStep={this.prevStep} />}
      </>
    );
  }
}

export default App;
