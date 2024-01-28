import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTJhNjJlYzNlOWJkYjc3M2Y1YmJjNjc3NTI5ZDkyOSIsInN1YiI6IjY1YjNmNjFiMDAyMTM0MDE2NDdjMjMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.epkZynBE78-YD7KROr6bHdZoaxNDS6zSxB5Q7s92oo8';

async function tredingMoviesApi() {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?language=en-US`,
    {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTJhNjJlYzNlOWJkYjc3M2Y1YmJjNjc3NTI5ZDkyOSIsInN1YiI6IjY1YjNmNjFiMDAyMTM0MDE2NDdjMjMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.epkZynBE78-YD7KROr6bHdZoaxNDS6zSxB5Q7s92oo8',
        accept: 'application/json',
      },
    }
  );
  // console.log(data);
  return data;
}
export default tredingMoviesApi;

export async function moviesDetailsApi(id) {
  const { data } = await axios.get(`${BASE_URL}movie/${id}?language=en-US`, {
    headers: {
      Authorization: API_KEY,
      accept: 'application/json',
    },
  });
  // console.log(data);
  return data;
}

export async function castApi(id) {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/credits?language=en-US`,
    {
      headers: {
        Authorization: API_KEY,
        accept: 'application/json',
      },
    }
  );
  // console.log(data);
  return data;
}

export async function reviewApi(id) {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/reviews?language=en-US`,
    {
      headers: {
        Authorization: API_KEY,
        accept: 'application/json',
      },
    }
  );
  // console.log(data);
  return data;
}

export async function searchMoviesApi(search) {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        Authorization: API_KEY,
        accept: 'application/json',
      },
    }
  );
  // console.log(data);
  return data;
}
