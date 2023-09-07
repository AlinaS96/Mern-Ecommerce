import React from 'react'
import './category.css'
import { Link } from 'react-router-dom'
const Category = ({ category }) => {
  return (
    <div className='category' >
      <img src={`${category.image}`} alt="" />
      <h1>{category.title}</h1>
      <Link to="/products">
        <button style={{
          position: 'absolute',
          backgroundColor: 'white',
          padding:'10px',
          zIndex:100,
          top:'85%',
          left:'35%',
          border: 'none'}}>
        SHOP NOW</button>
    </Link>
    </div >
  )
}

export default Category
