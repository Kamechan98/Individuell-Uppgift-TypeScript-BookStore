import React from 'react'
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { db } from "../../firebase/config"
import { Book } from '../../utilities/product'
import { DocumentData, QueryDocumentSnapshot, collection, onSnapshot } from 'firebase/firestore'


const Card = () => {
  const navigate = useNavigate()
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "books"), (snapshot) => {
      const productData: Book[] = snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => {
        const data = doc.data();
        console.log("books",data);
        return data as Book;
      });
      setBooks(productData);
    });

    return () => unsubscribe(); // Unsubscribe from the listener when the component is unmounting
  }, []);
  console.log(books);

  return (
    <div className='product-list' id='product-list'>
    <div>
    {books.map((book) => (
    <div className='book' key={book.id}  onClick={() =>{
      navigate(`/book/${book.id}`)
      }}>
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
    </div> 
    
    
    </div>
        
      ))}
    </div>
    </div>
  )
}

export default Card