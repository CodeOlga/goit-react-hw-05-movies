import PropTypes from 'prop-types';
import {
  Container,
  DescMovie,
  DescSubtitle,
  DescText,
  Image,
  Title,
} from './MovieCard.styled';

const MovieCard = ({ movieDetails }) => {

  const { poster_path, title, vote_average, overview, genres, name } = movieDetails;

  const getGenres = () => {
    return genres?.map(({ name }) => name).join(' ');
  };
  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
  const userScore = Math.round((vote_average * 100) / 10);

  return (
    movieDetails &&
      <Container>
        <Image src={
          poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : defaultImg
          }
          width={500}
          alt="poster"
        />
        <DescMovie>
          <Title>{title || name}</Title>
          <DescText> User Score: {userScore}</DescText>
          <DescSubtitle>Overview</DescSubtitle>
          <DescText>{overview}</DescText>
          <DescSubtitle>Genres</DescSubtitle>
          <DescText>{getGenres()}</DescText>         
        </DescMovie>
      </Container>
  )
}

MovieCard.propTypes = {
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};

export default MovieCard;

