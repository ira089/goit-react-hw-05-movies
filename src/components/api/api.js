import axios from 'axios';

async function tredingMoviesApi() {
  const BASE_URL = 'https://api.themoviedb.org/3/';
//   const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTJhNjJlYzNlOWJkYjc3M2Y1YmJjNjc3NTI5ZDkyOSIsInN1YiI6IjY1YjNmNjFiMDAyMTM0MDE2NDdjMjMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.epkZynBE78-YD7KROr6bHdZoaxNDS6zSxB5Q7s92oo8';

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTJhNjJlYzNlOWJkYjc3M2Y1YmJjNjc3NTI5ZDkyOSIsInN1YiI6IjY1YjNmNjFiMDAyMTM0MDE2NDdjMjMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.epkZynBE78-YD7KROr6bHdZoaxNDS6zSxB5Q7s92oo8

  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?language=en-US`, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTJhNjJlYzNlOWJkYjc3M2Y1YmJjNjc3NTI5ZDkyOSIsInN1YiI6IjY1YjNmNjFiMDAyMTM0MDE2NDdjMjMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.epkZynBE78-YD7KROr6bHdZoaxNDS6zSxB5Q7s92oo8',
            'accept': 'application/json'
        }
    }
  );
  console.log(data);
  return data;
}
export default tredingMoviesApi;