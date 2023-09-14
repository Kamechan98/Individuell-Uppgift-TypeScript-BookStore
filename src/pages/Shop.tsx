import React from 'react'
import '../components/Card/Card.css'
import { useCart } from '../context/CartContext'
import { useBooks } from '../context/BooksContext';


const Shop = () => {
  const cart = useCart()
  console.log(cart)
  return (
      <div className='list' id='list'>
      {cart.cart.length > 0 ? (
          cart.cart.map(cartItem => <div key={cartItem.id}>

            <p>{cartItem.quantity}</p>
            <img src={cartItem.book.imgURL} alt="" />
            <button
              onClick={()=>cart.saveToCart(cartItem.book)}
            >+</button>
            <button
            onClick={()=>cart.removeFromCart(cartItem.book)}
            id='remove'>-</button>
            <button
            onClick={()=>cart.deleteCart(cartItem.book)}
            id='delete'>Delete Cart</button>
            </div>)
        )
        : (
          <h2>No books to show</h2>
        )}
        
      </div>
  )
}

export default Shop