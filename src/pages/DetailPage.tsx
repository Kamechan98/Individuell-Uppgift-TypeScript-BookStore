import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Book } from '../utilities/product'
import { db } from "../firebase/config"
import { collection, onSnapshot, doc,  getDoc } from 'firebase/firestore'

const DetailPage: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | undefined>(undefined);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        if (!id) {
          console.log('ID parameter is missing.');
          return;
        }

        const bookDocRef = doc(db, 'books', id);
        const bookSnapshot = await getDoc(bookDocRef);

        if (bookSnapshot.exists()) {
          const bookData: Book = {
            id: bookSnapshot.id,
            Title: bookSnapshot.get('Title'),
            Category: bookSnapshot.get('Category'),
            Price: bookSnapshot.get('Price'),
            Author: bookSnapshot.get('Author'),
            Description: bookSnapshot.get('Description'),
            Year: bookSnapshot.get('Year'),
            ISBN: bookSnapshot.get('ISBN'),
            imgURL: bookSnapshot.get('imgURL'),
          };
          setBook(bookData);
        } else {
          console.log(`Book with ID ${id} not found.`);
        }
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [id]);
  

  // Render the book information if found
  return (
    <div className="product-details">
      {book ? (
        <>
          <p>Title: {book.Title}</p>
          <p>Category: {book.Category}</p>
          <p>Price: ${book.Price}</p>
          <p>Author: {book.Author}</p>
          <p>Description: {book.Description}</p>
          <p>Year: {book.Year}</p>
          <p>ISBN: {book.ISBN}</p>
          <img src={book.imgURL} alt={book.Title} />
        </>
      ) : (
        <p>Book not found.</p>
      )}
    </div>
  );
};

export default DetailPage;