import { DocumentData, QueryDocumentSnapshot, collection, onSnapshot } from 'firebase/firestore'
import React, { createContext, PropsWithChildren, useState, useEffect, useContext } from 'react'
import { db } from '../firebase/config'

interface ProductContextState {
    books: Book[],
}

const defaultState: ProductContextState = {
    books: []
}

const BooksContext = createContext<ProductContextState>(defaultState)

const BooksProvider: React.FC<PropsWithChildren> = ({
    children  
}) => {


const [books, setBooks] = useState<Book[]>([])
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
return (
    <BooksContext.Provider value={{
        books
    }}>
        {children}
    </BooksContext.Provider>
)
}

const useBooks = ( ) => {
    const book = useContext(BooksContext)
    return book
}

export{
    useBooks
}


export default BooksProvider