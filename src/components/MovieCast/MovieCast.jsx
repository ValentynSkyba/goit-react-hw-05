import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieId)
      .then((data) => setCast(data))
      .catch((error) => console.log(error));
  }, [movieId]);

  return (
    <div className={s.cast}>
      {cast && (
        <ul className={s.castList}>
          {cast.cast.map((actor) => (
            <li className={s.actor} key={actor.id}>
              <img
                className={s.poster}
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
