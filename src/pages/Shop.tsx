import React from 'react'
import Card from '../components/Card/Card'

interface CardProps {
    book: Book
  }
  

const Shop : React.FC<CardProps> = ({ book }) => {
  return (
    <div>
        <Card key={book.id} book={book}/>
    </div>
  )
}

export default Shop