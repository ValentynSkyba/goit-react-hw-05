import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={s.warper}>
      <ul className={s.list}>
        {movies &&
          movies.map((movie) => (
            <li className={s.item} key={movie.id}>
              <Link
                className={s.link}
                state={{ from: location }}
                to={`/movies/${movie.id}`}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieList;
