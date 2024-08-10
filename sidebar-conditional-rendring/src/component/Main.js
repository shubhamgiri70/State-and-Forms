import React from "react";
import data from "../data.json";
import "../index.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, selectedMovie: null };
  }

  toggleModal = (movie) => {
    this.setState({
      showModal: !this.state.showModal,
      selectedMovie: movie || null,
    });
  };

  render() {
    return (
      <>
        <ul className="movies-list">
          {data.map((movie, index) => (
            <li className="movie" key={index}>
              <img src={movie.Images[1]} alt={movie.Title} />
              <ul>
                <li>Title: {movie.Title}</li>
                <li>Released Date: {movie.Released}</li>
              </ul>
              <div className="movie-button">
                <button onClick={() => this.toggleModal(movie)}>
                  More Info
                </button>
              </div>
            </li>
          ))}
        </ul>
        {this.state.showModal && (
          <MovieModel
            movie={this.state.selectedMovie}
            toggleModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}

function MovieModel({ movie, toggleModal }) {
  if (!movie) return null;

  return (
    <div className="movie-modal">
      <div className="modal-content">
        <span className="close" onClick={() => toggleModal(null)}>
          ❌
        </span>
        <h2>{movie.Title}</h2>
        <img src={movie.Images[2]} alt={movie.Title} />
        <p>Released: {movie.Released}</p>
        <p>Runtime: {movie.Runtime}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Director: {movie.Director}</p>
        <p>Writer: {movie.Writer}</p>
        <p>Actors: {movie.Actors}</p>
        <p>Plot: {movie.Plot}</p>
        <p>Language: {movie.Language}</p>
        <p>Country: {movie.Country}</p>
        <p>Awards: {movie.Awards}</p>
        <p>imdbRating: {movie.imdbRating}</p>
      </div>
    </div>
  );
}

export default Main;
