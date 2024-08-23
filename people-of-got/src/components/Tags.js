import React from "react";
import data from "../got.json";

function Tags(props) {
  const houses = data.houses || [];
  let houseNames = houses.map((house) => house.name);
  return (
    <main>
      <ul className="tags">
        {houseNames.map((house) => (
          <li
            key={house}
            className={house === props.activeHouse ? "active" : ""}
            onClick={() => props.handleClick(house)}
          >
            {house}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Tags;
