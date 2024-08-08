import React from "react";
import "../index.css";

function Main({ data }) {
  return (
    <>
      <ul className="food-items flex wrap">
        {data.map((item) => (
          <li key={item.id} className="flex justify-between">
            <img src={item.img} alt={item.title} />
            <div className="food-details">
              <div className="flex item-center justify-between">
                <h2>{item.title}</h2>
                <span>{item.price}</span>
              </div>
              <hr />
              <p>{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Main;
