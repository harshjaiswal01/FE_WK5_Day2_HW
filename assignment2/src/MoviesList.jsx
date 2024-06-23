import React, { useState } from 'react';
import { Container, Button, ListGroup, ButtonGroup } from 'react-bootstrap';

const MoviesList = () => {
    const [movies, setMovies] = useState([
      { title: 'Blah 1', genre: 'Fantasy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', showDetails: false },
      { title: 'Blah 2', genre: 'Fantasy', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', showDetails: false },
      { title: 'Blah 3', genre: 'Action', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', showDetails: false },
      { title: 'Blah 4', genre: 'Action', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', showDetails: false },
      { title: 'Blah 5', genre: 'Drama', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', showDetails: false },
      { title: 'Blah 6', genre: 'Drama', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', showDetails: false },
      { title: 'Blah 7', genre: 'Crime', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', showDetails: false },
      { title: 'Blah 8', genre: 'Crime', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', showDetails: false },
    ]);

  const [selectedGenre, setSelectedGenre] = useState('All');

  const toggleDetails = (index) => {
    const newMovies = [...movies];
    newMovies[index].showDetails = !newMovies[index].showDetails;
    setMovies(newMovies);
  };

  const removeMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index);
    setMovies(newMovies);
  };

  const genres = ['All', ...new Set(movies.map(movie => movie.genre))];

  const filteredMovies = selectedGenre === 'All' ? movies : movies.filter(movie => movie.genre === selectedGenre);

  return (
    <Container className="mt-5">
      <ButtonGroup className="mb-3">
        {genres.map(genre => (
          <Button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            variant={selectedGenre === genre ? 'primary' : 'secondary'}
          >
            {genre}
          </Button>
        ))}
      </ButtonGroup>
      <ListGroup>
        {filteredMovies.map((movie, index) => (
          <ListGroup.Item key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span onClick={() => toggleDetails(index)} style={{ cursor: 'pointer', color: 'blue' }}>
                {movie.title}
              </span>
              <Button variant="danger" size="sm" onClick={() => removeMovie(index)}>
                Remove
              </Button>
            </div>
            {movie.showDetails && <p>{movie.description}</p>}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default MoviesList;
