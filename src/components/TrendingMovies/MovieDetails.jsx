import React from 'react'
import { useEffect, useState } from 'react'
import { useParams,useNavigate,useLocation } from 'react-router-dom'
import { moviesDetailsApi } from 'components/api/api'
import styles from './MovieDetails.module.css'

 const MovieDetails = () => {
    const [movieDet, setMovieDet]= useState({})
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

const {id} = useParams()
console.log(id)
const location = useLocation();
    const from = location.state?.from || "/";
    const navigate = useNavigate();

useEffect(() => {
    const fetchMoviesDet = async () => {
        try {
            setLoading(true);
            const dataMovies = await moviesDetailsApi(id);
            console.log(dataMovies)
            console.log(dataMovies.title)
            setMovieDet(dataMovies)
            // setPosts(data?.length ? data : []);
        }
        catch (error) {
            setError(error.message);
        }
        finally {
            setLoading(false);
        }
    }

    fetchMoviesDet(id);


}, [id]);

const goBack = () => navigate(from);
const {title, poster_path, vote_average, overview, genres, release_date} = movieDet;
// console.log(genres);
// console.log(release_date)
const year = release_date?.substring(0, 4);
console.log(year);
const genresArr = genres?.map((item) => item.name);
const genresString = genresArr?.join(' ');
console.log(genresString)
console.log(typeof(vote_average))     
const userScore = Math.round(vote_average * 10);
console.log(userScore)

const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'

  return (
    <>
    {loading && <p>...Loading</p>}
    {error && <p>{error}</p>}
    <button className={styles.btn} onClick={goBack} type="button">Go back</button>
    <div className={styles.wrap}>
         <img src={
        poster_path ?
        `https://image.tmdb.org/t/p/w500/${poster_path}`
        // [<https://image.tmdb.org/t/p/w500/${poster_path}>](<https://image.tmdb.org/t/p/w500/$%7poster_path%7D>)
        : defaultImg    
        } alt='poster' width={250}/>
         <div className={styles.wrapText}>
             <h2>{title} ({year})</h2>
            <p>User Score: {userScore}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genresString}</p>
        </div>
    </div>
    </>
  )
}

export default MovieDetails