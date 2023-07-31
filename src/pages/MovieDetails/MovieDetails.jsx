import MovieCard from 'components/MovieCard/MovieCard';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { getMovieDetails } from 'services/moviesAPI';

import {
  AddInfo,
  Container,
  StyledLinkBtn,
  Title,

} from './MovieDetails.styled';
import {
  List,
  ListItem,
  StyledLink,
} from 'components/MovieList/MovieList.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async movieId => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error.message);
      } 
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <Container>
      <StyledLinkBtn to={backLinkLocationRef.current}>
        &larr; Go back
      </StyledLinkBtn>
      <MovieCard movieDetails={movieDetails} />
      <AddInfo>
        <Title>Additional information</Title>
        <List>
          <ListItem>
            <StyledLink to="cast" state={backLinkLocationRef.current}>
              Cast
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink to="reviews">Reviews</StyledLink>
          </ListItem>
        </List>
      </AddInfo>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;




