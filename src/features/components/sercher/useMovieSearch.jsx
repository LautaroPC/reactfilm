import { useState, useEffect } from 'react';
import { getMovieSearch } from '../../../features/components/header/services/search_service';

const useMovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState();
  const [moviesError, setMoviesError] = useState();
  const [moviesIsLoading, setMoviesIsLoading] = useState(false);

  const search = (parametro) => {
    setQuery(parametro);
  };

  useEffect(() => {
    let cancelRequest = false;

    const fetchData = async () => {
      if (query.trim() === '') {
        return;
      }
      setMoviesIsLoading(true);
      try {
        const response = await getMovieSearch(query);
        if (!cancelRequest) {
          setMovies(response);
        }
      } catch (error) {
        if (!cancelRequest) {
          setMoviesError(error);
        }
      } finally {
        if (!cancelRequest) {
          setMoviesIsLoading(false);
        }
      }
    };
    const delayFetch = setTimeout(fetchData, 2000);

    return () => {
      cancelRequest = true;
      clearTimeout(delayFetch);
    };
  }, [query]);
  
  return { query, movies, moviesError, moviesIsLoading, search };
};

export default useMovieSearch;