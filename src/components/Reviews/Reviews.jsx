import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getMovies from 'API/getMovies';

import { List, Item, Text, Title } from '../Reviews/Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovies(`/movie/${movieId}/reviews`).then(res => {
      setReviews(res.data.results);
    });
  }, [movieId]);

  return (
    <List>
      {reviews.length ? (
        reviews.map(({ author, content, id }) => {
          return (
            <Item key={id}>
              <Title>Author: {author}</Title>
              <Text>{content}</Text>
            </Item>
          );
        })
      ) : (
        <Title>Sorry, we don't have any reviews for this movie</Title>
      )}
    </List>
  );
};

export default Reviews;
