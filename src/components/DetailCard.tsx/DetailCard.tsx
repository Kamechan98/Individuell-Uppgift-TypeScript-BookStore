import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Book } from '../../utilities/product'
import { db } from "../../firebase/config"
import { DocumentData, QueryDocumentSnapshot, collection, onSnapshot } from 'firebase/firestore'

interface BookProps {
bookId: string; // Prop for the book ID you want to find
}

export const DetailCard: React.FC<BookProps> = ({ bookId }) => {

  const [book, setBook] = useState<Book | undefined>(); // Use Book | null for the single book

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'books'), (snapshot) => {
      const bookData: Book | undefined = snapshot.docs
      .map((doc: QueryDocumentSnapshot<DocumentData>) => ({
        ...doc.data(),
        id: doc.id,
      } as Book))
      .find((b) => b.id === bookId);

    setBook(bookData);

    if (!bookData) {
      // Handle the case where the book with the given ID is not found
      console.log(`Book with ID ${bookId} not found.`);
    }
  });

  return () => unsubscribe(); // Unsubscribe from the listener when the component is unmounting
}, [bookId]); // Re-run the effect when the bookId prop changes

console.log(book);

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