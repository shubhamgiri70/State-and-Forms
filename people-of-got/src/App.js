import React from "react";
import Header from "./components/Header";
import Tags from "./components/Tags";
import Footer from "./components/Footer";
import data from "../src/got.json";
import People from "../src/components/People.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeHouse: "",
    };
  }

  handleClick = (house) => {
    this.setState({
      activeHouse: house,
    });
  };

  render() {
    const houses = data.houses || [];
    let everyone;
    if (!this.state.activeHouse) {
      everyone = houses.reduce((acc, house) => {
        return acc.concat(house.people);
      }, []);
    } else {
      const selectedHouse = houses.find(
        (house) => house.name === this.state.activeHouse
      );
      everyone = selectedHouse ? selectedHouse.people : [];
    }
    return (
      <>
        <Header />
        <Tags
          activeHouse={this.state.activeHouse}
          handleClick={this.handleClick}
        />
        <People everyone={everyone} activeHouse={this.props.activeHouse} />
        <Footer />
      </>
    );
  }
}

export default App;
