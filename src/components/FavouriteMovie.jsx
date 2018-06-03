import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchFavouriteMovie } from '../reducers/movies.reducer';

class FavouriteMovie extends Component {
  render() {
    return (
      <div>
        <h1>Welcome!!</h1>
        <button onClick={() => this.props.fetchFavouriteMovie()} > Fetch My Fav Movie </button>
        {
          this.props.isLoading &&
          <p> Loading please wait...</p>
        }
        {
          this.props.favMovie &&
          <div>
            <h2>{this.props.favMovie.Title}</h2>
            <img src={this.props.favMovie.Poster} />
            <h3>Starring : {this.props.favMovie.Actors}</h3>
            <p>Plot : {this.props.favMovie.Plot}</p>
          </div>

        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favMovie: state.movies.favourite,
    isLoading: state.movies.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFavouriteMovie,
  }, dispatch);
}

FavouriteMovie.propTypes = {
  fetchFavouriteMovie: PropTypes.func.isRequired,
  favMovie: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
};

FavouriteMovie.defaultProps = {
  favMovie: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteMovie);

