import getMovies from 'API/getMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovies(`/movie/${movieId}/reviews`).then(res => {
      setReviews(res.data.results);
    });
  }, [movieId]);

  return (
    <ul>
      {reviews
        ? reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            );
          })
        : "Sorry, we don't have any reviews for this movie"}
    </ul>
  );
};

export default Reviews;
