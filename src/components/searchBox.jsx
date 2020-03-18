import React, { Component } from "react";
import Axios from "axios";
import { MovieListComponent } from "./MovieListComponent";
import { Link } from "react-router-dom";

export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [],
      fav: [],
      searchInput: "",
      displayFav: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.addToFavourite = this.addToFavourite.bind(this);
    this.handleFavourites = this.handleFavourites.bind(this);
  }

  handleInput(event) {
    this.setState({ searchInput: event.target.value });
  }

  handleSearch(event) {
    event.preventDefault();
    var apiURL =
      `http://www.omdbapi.com/?s=` +
      this.state.searchInput +
      `&apikey=801356f9`;
    Axios.get(apiURL).then(res => {
      if (res.data.Response === "False") {
        alert("Movie Not Found");
      } else {
        this.setState({ movieData: res.data.Search });
        console.log(this.state.movieData);
      }
    });
  }

  addToFavourite(movie) {
    if (this.state.fav.length === 10) {
      let fav = this.state.fav.slice(1, 10);
      this.setState({ fav: fav });
    } else {
      let fav = this.state.fav.slice();
      fav.push(movie);
      this.setState({ fav: fav });
    }
    console.log(this.state.fav);
  }

  handleFavourites() {
    if (this.state.fav.length === 0) {
      alert("Please add a movie first");
    } else {
      this.setState({
        movieData: this.state.fav,
        displayFav: true
      });
    }
  }

  render() {
    return (
      <div>
        <div className="input-group mb-4">
          <input
            type="text"
            value={this.state.searchInput}
            onChange={this.handleInput}
            className="form-control"
            placeholder="Enter Movie name to Search..."
          />

          <div className="input-group-prepend" id="button-addon3">
            <button
              className="btn btn-success"
              type="button"
              onClick={this.handleSearch}
            >
              Search
            </button>
            <Link to="/favourites">
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.handleFavourites}
              >
                Favourites
              </button>
            </Link>
          </div>
        </div>
        <MovieListComponent
          movies={this.state.movieData}
          addToFavourite={this.addToFavourite}
        />
      </div>
    );
  }
}
