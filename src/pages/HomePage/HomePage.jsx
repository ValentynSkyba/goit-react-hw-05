import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then((data) => setMovies(data.results));
  }, []);

  return (
    <div className={s.HomePage}>
      <h2 className={s.hero}>Trending</h2>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.item}>
            <Link className={s.title} to={"/movies/" + movie.id.toString()}>
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

export default HomePage;
