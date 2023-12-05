import React from 'react'
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../services/movies.services';
import { getPopularTv, getTopRatedTv, getAiringTodayTv } from '../services/series.services';
import useSWR from 'swr';
import ListContainer from '../../components/list/list_container';
import SwiperError from '../../../core/components/app_swiper/swiper_error';
import SwiperContainer from '../../../core/components/app_swiper/swiper_container';
import SwiperSkeleton from '../../../core/components/app_swiper/swiper_skeleton';
import BannerContainer from '../../../core/components/app_banner/banner_container';
import BannerSkeleton from '../../../core/components/app_banner/banner_skeleton';
import BannerError from '../../../core/components/app_banner/banner_error';
import useMovieSearch from '../../components/sercher/useMovieSearch';
import Sercher from '../../components/sercher/Sercher';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import '../../../css/components/navbar.css'
/* import '../views/home.css' */



const HomeView = () => {
  // Movies
  const { data: popularMovies, error: popularMoviesError, isLoading: popularMoviesIsLoading } = useSWR(`getPopularMovies`, getPopularMovies);
  const { data: topRatedMovies, error: topRatedMoviesError, isLoading: topRatedMoviesIsLoading } = useSWR(`getTopRatedMovies`, getTopRatedMovies);
  const { data: comingMovies, error: comingMoviesError, isLoading: comingMoviesIsLoading } = useSWR(`getUpcomingMovies`, getUpcomingMovies);

  // TV
  const { data: popularTv, error: popularTvError, isLoading: popularTvIsLoading } = useSWR(`getPopularTv`, getPopularTv);
  const { data: topRatedTv, error: topRatedTvError, isLoading: topRatedTvIsLoading } = useSWR(`getTopRatedTv`, getTopRatedTv);
  const { data: airingTodayTv, error: airingTodayTvError, isLoading: airingTodayTvIsLoading } = useSWR(`getAiringTodayTv`, getAiringTodayTv);

  const {
    query,
    movies,
    moviesError,
    moviesIsLoading,
    search
  } = useMovieSearch();

  return (
    <div className='box-home' style={{backgroundColor:"rgb(0, 19, 20)"}}>
      <div className='box-nav'>
        <h1>ReactFilm</h1>
        <div>
          <Header >
            <Sercher onSearch={search}></Sercher>
          </Header>
        </div>
      </div>
        {query != '' ?
          <ListContainer movies={movies} moviesError={moviesError} moviesIsLoading={moviesIsLoading} /> :
          <>
            {popularMoviesError ? <BannerError /> : popularMoviesIsLoading ? <BannerSkeleton /> : <BannerContainer data={popularMovies}></BannerContainer>}

            <div className='box-movie-tv'>
            {popularMoviesError ? <SwiperError /> : popularMoviesIsLoading ? <SwiperSkeleton /> : <SwiperContainer title={"Popular Movies"} data={popularMovies} />}
            {topRatedMoviesError ? <SwiperError /> : topRatedMoviesIsLoading ? <SwiperSkeleton /> : <SwiperContainer title={"Top Rated Movies"} data={topRatedMovies} />}
            {comingMoviesError ? <SwiperError /> : comingMoviesIsLoading ? <SwiperSkeleton /> : <SwiperContainer title={"Coming Movies Movies"} data={comingMovies} />}

            {popularTvError ? <SwiperError /> : popularTvIsLoading ? <SwiperSkeleton /> : <SwiperContainer title={"Popular TV"} data={popularTv}></SwiperContainer>}
            {topRatedTvError ? <SwiperError /> : topRatedTvIsLoading ? <SwiperSkeleton /> : <SwiperContainer title={"Top Rated TV"} data={topRatedTv} />}
            {airingTodayTvError ? <SwiperError /> : airingTodayTvIsLoading ? <SwiperSkeleton /> : <SwiperContainer title={"Airing Today TV"} data={airingTodayTv} />}
            </div>
          </>
        }
      <Footer />
    </div>
  );
}

export default HomeView;



