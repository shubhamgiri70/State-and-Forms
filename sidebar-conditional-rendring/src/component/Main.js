import React from "react";
import data from "../data.json";
import "../index.css";

class Main extends React.Component {
  render() {
    return (
      <>
        <ul className="movies-list">
          {data.map((movie, index) => {
            return (
              <li className="movie" key={index}>
                <img src={movie.Images[1]} alt={movie.Title} />
                <ul>
                  <li>Title: {movie.Title}</li>
                  <li>Released Date: {movie.Released}</li>
                </ul>
                <div className="movie-button">
                  <button>More Info</button>
                </div>
              </li>
            );
          })}
        </ul>
        <MovieModel />
      </>
    );
  }
}

function MovieModel() {
  return (
    <div>
      <span>❌</span>
    </div>
  );
}

export default Main;
