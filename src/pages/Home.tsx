import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card'
import { DocumentData, QueryDocumentSnapshot, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config';

export const Home = () => {
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
    <>
    {books.length > 0 ? (
          books.map(book => <Card key={book.id} book={book} />)
        ) : (
          <h2>No books to show</h2>
        )}
    </>
    
  )
}
