import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, [movieId]);

  if (reviews && reviews.results.length === 0) {
    return <h2>We not have any reviews for this movie</h2>;
  }

  return (
    <div className={s.reviews}>
      {reviews && (
        <ul className={s.reviewsList}>
          {reviews.results.map((review) => (
            <li className={s.review} key={review.id}>
              <h3>Author: {review.author}</h3>
              <p className={s.content}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
