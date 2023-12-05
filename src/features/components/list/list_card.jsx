import React from 'react'
import {  useNavigate } from 'react-router-dom'

const ListCard = ({item}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/");
    navigate(`/${item.id}`)
  }

  return (
    <div style={{
        backgroundImage: `url(${item.backdrop})`,
        height: '150px',
        width: '250px',
      }}
      onClick={handleClick}>
        <h1>{item.title}</h1>
    </div>
  )
}

export default ListCard