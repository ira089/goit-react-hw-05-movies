// import axios from 'axios';

// async function searchImg(search, page) {
//   const BASE_URL = 'https://pixabay.com/api/';
//   const API_KEY = '9e2a62ec3e9bdb773f5bbc677529d929';

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTJhNjJlYzNlOWJkYjc3M2Y1YmJjNjc3NTI5ZDkyOSIsInN1YiI6IjY1YjNmNjFiMDAyMTM0MDE2NDdjMjMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.epkZynBE78-YD7KROr6bHdZoaxNDS6zSxB5Q7s92oo8

//   const { data } = await axios.get(
//     `${BASE_URL}?key=${API_KEY}&q=${search}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
//   );
//   console.log(data);
//   return data;
// }
// export default searchImg;