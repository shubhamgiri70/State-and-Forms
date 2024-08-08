import React, { useState } from "react";
import Header from "./components/Header.js";
import Tags from "./components/Tags.js";
import Main from "./components/Main.js";
import data from "../src/data.js";

function App() {
  const [filteredData, setFilteredData] = useState(data);
  const [activeFooditem, setActiveFooditem] = useState("");

  const handleTagClick = (newFilteredData, food) => {
    setFilteredData(newFilteredData);
    setActiveFooditem(food);
  };

  return (
    <>
      <Header />
      <main>
        <Tags activeFooditem={activeFooditem} onTagClick={handleTagClick} />
        <Main data={filteredData} />
      </main>
    </>
  );
}

export default App;
