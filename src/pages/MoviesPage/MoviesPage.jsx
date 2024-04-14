import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchSearchMovies } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setUseSearchParams] = useSearchParams();

  const handleSearchMovies = async (query) => {
    const response = await fetchSearchMovies(query);
    setMovies(response.results);
  };

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      handleSearchMovies(query);
    }
  }, [searchParams]);

  return (
    <div>
      <SearchBar setUseSearchParams={setUseSearchParams} />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
