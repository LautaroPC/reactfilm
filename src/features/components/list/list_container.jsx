import React from 'react'
import List from './List.jsx'

const ListContainer = ({movies, moviesError, moviesIsLoading}) => {
  return (
   <List data={movies} error={moviesError} isLoading={moviesIsLoading}/>
  )
}

export default ListContainer