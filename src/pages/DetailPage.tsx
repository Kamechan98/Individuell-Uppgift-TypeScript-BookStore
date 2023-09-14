import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';

interface DocData {
  id: string;
  [key: string]: any;
}

const DetailPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState<DocData | null>(null);

  useEffect(() => {
    const getDocAsync = async () => {
      try {
        if (id) {
          console.log("ID",id)
          const docRef = doc(db, 'books', id);
          console.log("docRef",docRef.path)

          const docSnapshot = await getDoc(docRef);

          if (!docSnapshot.exists()) {
            console.log('Could not find that document')
          } else {
            setBook({ id: docSnapshot.id, ...docSnapshot.data() } as DocData);

          }
        }
      } catch (err) {
        console.log('An error occurred while fetching the document')
      }
    };

    getDocAsync();
  }, [id]);

    return (
    <>
      {book ? (
        <div>
          <h1>Title: {book.Title}</h1>
          <img src={book.imgURL} alt={book.Title} />
          <button className='cart-btn' id='cart-btn'>Add To Cart</button>
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