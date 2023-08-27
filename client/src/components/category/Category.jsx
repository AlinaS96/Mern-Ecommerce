import React from 'react'
import './category.css'
const Category = ({category}) => {
  return (
    <div className='category' >
      <img src={`${category.image}`} alt="" />
      <h1>{category.title}</h1>
      <button>SHOP NOW</button>
    </div>
  )
}

export default Category
