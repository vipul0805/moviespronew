import React, { Component } from "react";
import Axios from "axios";

export class MoviesData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movplot: "",
      rating: "",
      runtime: ""
    };

    this.getDetails = this.getDetails.bind(this);
  }

  getDetails(id) {
    var apiURL = `http://www.omdbapi.com/?apikey=801356f9&i=${id}`;
    Axios.get(apiURL).then(res =>
      this.setState({
        movplot: res.data.Plot,
        rating: "IMDBRating : " + res.data.imdbRating,
        runtime: res.data.Runtime
      })
    );
  }

  render() {
    return (
      <div className="col-md-3">
        <div className="card mb-4 box-shadow">
          <img
            className="card-img-top"
            src={this.props.movie.Poster}
            data-src={this.props.movie.Poster}
            alt={this.props.movie.Title}
            style={{ width: "100%", height: 250 }}
          />
          <div className="card-body">
            <p className="card-text">{this.state.movplot}</p>
            <br />
            <b>{this.state.rating}</b>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => {
                    this.getDetails(this.props.idbKey);
                  }}
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => {
                    this.props.addToFavourite(this.props.movie);
                  }}
                >
                  Fav
                </button>
              </div>
              <small className="text-muted">{this.state.runtime}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
