import React from 'react'
import './Card.css';
import { Link} from 'react-router-dom';

interface CardProps {
  book: Book
}

const Card: React.FC<CardProps> = ({ book }) => {

  return (

    <Link to={`/book/${book.id}`} className='product-list' id='card'>
        <h1 className='book-title' id='book-title'>{book.Title}</h1>
        <div className='list'>
        <img id='book-img' src={book.imgURL} alt="" /> 
        <ul>
        <li>Written by: {book.Author}</li>
        <li>Published in: {book.Year}</li>
        <li>Genre: {book.Category}</li>
        <li>{book.Price} Kr</li>
        </ul> 
        <p>Desc:<br/>
        {book.Description}</p>
        <button className='cart-btn' id='cart-btn'>Add To Cart</button>
     </div> 
    </Link>

  )
}

export default Card