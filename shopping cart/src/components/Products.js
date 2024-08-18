import React from "react";

function Products(props) {
  return (
    <main className="flex-80">
      <div className="filter">
        <label for="options">Order By:</label>
        <select name="options" id="options">
          <option value="option1">select</option>
          <option value="option2">Highest To Lowest</option>
          <option value="option3">Lowest To Highest</option>
        </select>
      </div>
      <div className="all-cards">
        {props.allData.map((data) => {
          return (
            <div className="card">
              <img className="image" src={data.img} alt={data.title} />
              <h2>{data.title}</h2>
              <hr />
              <p>${data.price}</p>
              <button>Add To Cart</button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Products;
