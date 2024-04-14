import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDgzMjQ3YzYxYjE5OTFkNzk4ZTg5ZWNhNGY4ODJhMyIsInN1YiI6IjY2MTZkY2NkMjljNjI2MDEzMGExZTE3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wHci4g4AqvwI0cTD0GayxCLTHkPkGoeRw8HvzG68btQ";

export const fetchTrendingMovies = async () => {
  const response = await axios.get("3/trending/movie/day", {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });
  return response.data;
};

export const fetchMovieById = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      append_to_response: "images",
    },
  });
  return response.data;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/reviews`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      language: "en-US",
      page: 1,
    },
  });
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(`3/movie/${movieId}/credits`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
    params: {
      language: "en-US",
      page: 1,
    },
  });
  return response.data;
};

export const fetchSearchMovies = async (query) => {
  const response = await axios.get(
    `3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );
  return response.data;
};
