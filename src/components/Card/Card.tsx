import React from 'react'
import './Card.css';
import { Link} from 'react-router-dom';
import { useCart } from '../../context/CartContext';

interface CardProps {
  book: Book
}

const Card: React.FC<CardProps> = ({ book }) => {
  const cart = useCart()
  const isAdded = cart.cart.some(ci => ci.book.id === book.id)
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
        <button
          disabled={isAdded}
          onClick={(e)=> {
          e.preventDefault()
          e.stopPropagation()
          cart.saveToCart(book)
        }} className='cart-btn' id='cart-btn'>
          {isAdded ? "Added to cart" : "Add to cart"}
        </button>
     </div> 
    </Link>

  )
}

export default Card