interface NewCartItem {
    quantity: number;
    book: Book;
}

interface CartItem extends NewCartItem {
    id: string,
}