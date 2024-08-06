import React from "react";
import data from "../got.json";
import People from "./People";

class Tags extends React.Component {
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
    let houseNames = houses.map((house) => house.name);
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
      <main>
        <ul className="tags">
          {houseNames.map((house) => (
            <li
              key={house}
              className={house === this.state.activeHouse ? "active" : ""}
              onClick={() => this.handleClick(house)}
            >
              {house}
            </li>
          ))}
        </ul>
        <People everyone={everyone} activeHouse={this.state.activeHouse} />
      </main>
    );
  }
}

export default Tags;
