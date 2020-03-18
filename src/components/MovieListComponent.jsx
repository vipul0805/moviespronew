import React, { Component } from "react";
import { MoviesData } from "./moviesData";

export class MovieListComponent extends Component {
  render() {
    let movies = this.props.movies;

    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {movies.map(movie => {
              if (movie.Poster === "N/A") {
                movie.Poster = "/noimg.jpg";
              }
              return (
                <MoviesData
                  movie={movie}
                  idbKey={movie.imdbID}
                  addToFavourite={this.props.addToFavourite}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
