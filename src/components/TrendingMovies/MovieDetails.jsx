import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { moviesDetailsApi } from 'components/api/api'

 const MovieDetails = () => {
    const [movieDet, setMovieDet]= useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

const {id} = useParams()
console.log(id)

useEffect(() => {
    const fetchMoviesDet = async () => {
        try {
            setLoading(true);
            const dataMovies = await moviesDetailsApi(id);
            // const arrMovies = dataMovies.results
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
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

const {title,poster_path,vote_average,overview} = movieDet;
const defaultImg = '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>'
  return (
    <>
    {loading && <p>...Loading</p>}
        {error && <p>{error}</p>}
        <div>
        <img src={
        poster_path ?
        `https://image.tmdb.org/t/p/w500/${poster_path}`
        // [<https://image.tmdb.org/t/p/w500/${poster_path}>](<https://image.tmdb.org/t/p/w500/$%7poster_path%7D>)
        : defaultImg    
        } alt='poster' width={250}/>
        <div>
<h2>{title}</h2>
<p>`User Score:${vote_average}`</p>
<h3>Overview</h3>
<p>{overview}</p>
<h3>Genres</h3>
{/* <p>{genres}</p> */}
        </div>
        </div>
    </>
  )
}

export default MovieDetails