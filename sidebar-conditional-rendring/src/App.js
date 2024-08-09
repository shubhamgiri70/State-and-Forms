import React from "react";
import Sidebar from "./component/Sidebar";
import Main from "./component/Main";


function App() {
  console.log(data);
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
