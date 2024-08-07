import React from "react";
import "../index.css";
import data from "./data.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: null,
    };
  }
  render() {
    return (
      <>
        <div className="main">
          <h1>ALTCAMPUS FAQs</h1>
          <ul>
            {data.map((faq, index) => (
              <li>
                <h2
                  onClick={() => {
                    this.setState({
                      activeIndex:
                        this.state.activeIndex === index ? null : index,
                    });
                  }}
                  className="open-state"
                >
                  {faq.Q} {this.state.activeIndex === index ? "👆🏻" : "👇🏻"}
                </h2>
                {index === this.state.activeIndex && <p>{faq.A}</p>}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
