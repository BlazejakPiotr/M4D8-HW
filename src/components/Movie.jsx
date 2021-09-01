import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShowDetail from "../components/ShowDetail";

class Movie extends Component {
  render() {
    return (
      <div className="col-md-2 col-lg-2 movie-container mx-0 px-1">
        {this.props.movie.Title && (
          <Router>
            <Route component={ShowDetail} path="/details/:movieId" />

            <Link to={"/details/" + this.props.movie.imdbID}>
              <img
                src={this.props.movie.Poster}
                className="img-fluid carousel-img"
                alt="Movie Here"
              />
            </Link>
          </Router>
        )}
      </div>
    );
  }
}

export default Movie;
