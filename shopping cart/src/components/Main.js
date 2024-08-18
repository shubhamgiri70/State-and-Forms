import React from "react";
import Products from "./Products";

function Main(props) {
  return (
    <>
      <Products allData={props.products} />
    </>
  );
}

export default Main;
