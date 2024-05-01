import React, { useState, useEffect } from 'react';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = 'fd41a60d'; // Replace with your actual API key
  const API_URL = `http://www.omdbapi.com/?s=movie%20title&apikey=${API_KEY}`;


//   https://www.omdbapi.com/?i=tt3896198&apikey=fd41a60d

  const handleSearch = async () => {
    try {
      const response = await fetch(`${API_URL}=${searchTerm}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleMovieClick = async (imdbID) => {
    try {
      const response = await fetch(`${API_URL}&i=${imdbID}`);
      const data = await response.json();
      setSelectedMovie(selectedMovie === imdbID ? null : data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies by title..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {movies.map((movie) => (
          <div key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            <button onClick={() => handleMovieClick(movie.imdbID)}>Show Details</button>
            {selectedMovie === movie.imdbID && (
              <div>
                <p>{selectedMovie.Title}</p>
                <p>IMDB Rating: {selectedMovie.imdbRating}</p>
                <p>Release Date: {selectedMovie.Released}</p>
                <p>Genre: {selectedMovie.Genre}</p>
                <p>Director: {selectedMovie.Director}</p>
                <p>Actors: {selectedMovie.Actors}</p>
                <p>{selectedMovie.Plot}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
