import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const location = useLocation();
  const goBack = useRef(location.state?.from || "/");

  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetchMovieById(movieId).then((data) => setMovie(data));
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <div>
        <Link to={goBack.current}>
          <button className={s.button}>Go Back</button>
        </Link>
        <h1 className={s.hero}>{movie.title}</h1>
        <div className={s.movieCard}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <p className={s.title}>User Score: {movie.vote_average}</p>
          <p className={s.title}> Overview:{movie.overview}</p>
          <p className={s.title}>Release Date: {movie.release_date}</p>
          <p className={s.title}>
            Genres: {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <div className={s.link}>
            <div>
              <Link className={s.cast} to="cast">
                <button className={s.button}>Cast</button>
              </Link>
              <Link className={s.reviews} to="reviews">
                <button className={s.button}>Reviews</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
