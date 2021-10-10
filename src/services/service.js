import axios from "axios";

export const getTrendingItems = async () => {
  return axios.get(
    "https://api.themoviedb.org/3/trending/all/day?api_key=3a94078fb34b772a31d9a1348035bed7"
  );
};

export const getTopRatedItems = async () => {
  return axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=3a94078fb34b772a31d9a1348035bed7"
  );
};

export const getLatestItems = async () => {
  return axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=3a94078fb34b772a31d9a1348035bed7"
  );
};

export const getPopularItems = async () => {
  return axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=3a94078fb34b772a31d9a1348035bed7"
  );
};

export const getSearchItems = async (query) => {
  return axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=3a94078fb34b772a31d9a1348035bed7&query=${query}`
  );
};
export const getMovieFilterResults = async (filterObject) => {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&with_genres=${filterObject.genre}&year=${filterObject.year}`
  );
};
export const getTvFilterResults = async (filterObject) => {
  return axios.get(
    `https://api.themoviedb.org/3/discover/tv?api_key=3a94078fb34b772a31d9a1348035bed7&with_genres=${filterObject.genre}&year=${filterObject.year}`
  );
};

export const getMovieGenre = async () => {
  return axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=3a94078fb34b772a31d9a1348035bed7`
  );
};

export const getTvGenre = async () => {
  return axios.get(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=3a94078fb34b772a31d9a1348035bed7`
  );
};
