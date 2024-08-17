import React from "react";
import "../style/index.css";


function People(props) {
  return (
    <section className="cards">
      {props.everyone.map((person) => {
        return (
          <div key={person.name} className="card">
            <img src={person.image} alt={person.name} />
            <h2>{person.name}</h2>
            <p>{person.description}</p>
            <button
              onClick={() => {
                window.open(person.wikiLink, "_Blank");
              }}
            >
              Know More!
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default People;
