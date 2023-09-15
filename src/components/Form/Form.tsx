import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="title">Title</label>
        <input type="title" id='title'/>
        <label htmlFor="author">Author</label>
        <input type="author" id='author'/>
        <label htmlFor="year">Year</label>
        <input type="year" id='year'/>
        <label htmlFor="description">Desc</label>
        <input type="description" id='description'/>
        <label htmlFor="price">Price</label>
        <input type="price" id='price'/>
        <label htmlFor="imgURL">imgURL</label>
        <input type="imgURL" id='imgURL'/>
        <label htmlFor="ISBN">ISBN</label>
        <input type="ISBN" id='ISBN'/>
        <label htmlFor="Category">Category</label>
        <input type="Category" id='category'/>
        <button id='form-btn'>Submit</button>
      </form>
    </div>
  )
}

export default Form