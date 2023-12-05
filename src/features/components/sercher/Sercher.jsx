import React, { useState } from 'react'

const Sercher = ({ onSearch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        onSearch(e.target.value)
    }

    return (
    <div>
        <form  onSubmit={handleSubmit}>
            <input type="text" placeholder='buscar' onChange={handleChange}></input>
        </form>
    </div>
  )
}

export default Sercher