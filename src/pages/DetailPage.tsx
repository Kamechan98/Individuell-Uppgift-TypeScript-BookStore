import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import { useBooks } from '../context/BooksContext';
import '../components/Card/Card.css'
import { useCart } from '../context/CartContext';

interface DocData {
  id: string;
  [key: string]: any;
}

const DetailPage = () => {

  const cart = useCart()
  const { id } = useParams();
  const {books} =useBooks()
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    if(books ) {
      const _book = books.find(b => b.id === id) || null
      setBook(_book)
    }
  }, [id,books]);

    return (
    <>
      {book ? (
        <div id='card-detail'>
          <h1>Title: {book.Title}</h1>
          <img src={book.imgURL} alt={book.Title} />
          <button onClick={(e)=> {
          e.preventDefault()
          e.stopPropagation()
          cart.saveToCart(book)
        }} className='cart-btn' id='cart-btn'>Add To Cart</button>
          <p>Category: {book.Category}</p>
          <p>Price: ${book.Price}</p>
          <p>Author: {book.Author}</p>
          <p>Description: {book.Description}</p>
          <p>Year: {book.Year}</p>
          <p>ISBN: {book.ISBN}</p>
        </div>
      ) : (
        <p>Book not found.</p>
        )}
        </>
  );

};

export default DetailPage