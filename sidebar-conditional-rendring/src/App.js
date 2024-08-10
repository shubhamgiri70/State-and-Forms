import React from "react";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";

function App() {
  return (
    <>
      <h1>Movie List</h1>
      <section>
        <Sidebar />
        <Main />
      </section>
    </>
  );
}

export default App;