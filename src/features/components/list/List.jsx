import React from 'react'
import ListCard from '../list/list_card'
import ListError from '../list/list_error'
import ListSkeleton from '../list/list_skeleton'

const List = ({data, error, isLoading}) => {
  
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    }}>
    {error ? <ListError/> : 
      isLoading ? <ListSkeleton/> :
      data?.map((item) => (
          <ListCard key={item.id} item={item}></ListCard>
      ))
    }
    </div>
  )
}

export default List