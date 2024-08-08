import React from "react";
import data from "../data.js";
import "../index.css";

// Extract unique categories from data
const allFooditemType = [...new Set(data.map((food) => food.category))];

class Tags extends React.Component {
  handleTagClick = (food) => {
    const filteredData =
      food === "all"
        ? data
        : data.filter((foodItem) => foodItem.category === food);

    this.props.onTagClick(filteredData, food);
  };

  render() {
    return (
      <ul className="tags">
        <li
          key="all"
          onClick={() => this.handleTagClick("all")}
          className={this.props.activeFooditem === "all" ? "active" : ""}
        >
          All
        </li>
        {allFooditemType.map((food) => (
          <li
            key={food}
            onClick={() => this.handleTagClick(food)}
            className={this.props.activeFooditem === food ? "active" : ""}
          >
            {food.toUpperCase()}
          </li>
        ))}
      </ul>
    );
  }
}

export default Tags;
