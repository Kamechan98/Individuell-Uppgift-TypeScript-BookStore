import Card from '../components/Card/Card'
import { useBooks } from '../context/BooksContext';

export const Home = () => {
const {books} = useBooks()
  
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
