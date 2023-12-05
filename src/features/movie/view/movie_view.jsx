import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useSwr from 'swr'
import { getMovieDetails } from '../services/movie_detail_services'
import Header from '../../components/header/Header'
import MovieSkeleton from '../components/movie_skeleton'
import MovieError from '../components/movie_error'
import Sercher from '../../components/sercher/Sercher'
import useMovieSearch from '../../components/sercher/useMovieSearch'
import ListContainer from '../../components/list/list_container'
import AppButton from '../../../core/components/app_button/app_button'
import Footer from '../../components/footer/Footer'
import '../view/movie.css'
import '../../../core/components/app_button/button_primary.css'
import '../../../core/components/app_button/app_button.css'



const MovieView = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const { data: movieDetails, error: movieDetailsError, isLoading: movieDetailsIsLoading } = useSwr('getMovieDetails', () => getMovieDetails(id));

  const {
    query,
    movies,
    moviesError,
    moviesIsLoading,
    search
  } = useMovieSearch();

  console.log(query);

  return (
    <div>
      <div className='box-nav'>
        <h1>ReactFilm</h1>
        <div>
          <Header >
            <Sercher onSearch={search}></Sercher>
          </Header>
        </div>
      </div>
      <>
        {query != '' ?
          <ListContainer movies={movies} moviesError={moviesError} moviesIsLoading={moviesIsLoading} /> :
          <>
            {movieDetailsError ?
              <MovieError /> :
              movieDetailsIsLoading ?
                <MovieSkeleton /> :
                <div className='box-card'>
                  <div className='card-text' >
                    <AppButton className="app_button"
                    style={{padding: "3px 10px", 
                      margin: "0 20px" }}  onClick={() => { navigate("/") }}>Inicio</AppButton>
                    <h1>{movieDetails.title}</h1>
                    <h2>{movieDetails.tagline}</h2>
                    <h4>{movieDetails.description}</h4>
                    <h3>Rating: {movieDetails.rating}</h3>
                    <h3>Generos</h3>
                    <ul>
                      {movieDetails.genres.map((genere, index) => (
                        <li key={index}>{genere}</li>
                      ))}
                    </ul>
                    <h3>Duración: {movieDetails.time} minutos</h3>
                  </div>
                  <img src={movieDetails.poster} />
                </div>
            }
          </>
        }
        <Footer />
      </>
    </div>
  )
}

export default MovieView