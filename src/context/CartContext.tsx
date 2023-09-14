import { DocumentData, QueryDocumentSnapshot, collection, onSnapshot } from 'firebase/firestore'
import React, { createContext, PropsWithChildren, useState, useEffect, useContext } from 'react'
import { db } from '../firebase/config'

/*
TODO: saveCartItem
TODO: updateCartItemQuantity
TODO: deleteCartItem
*/

interface CartContextState {
    cart: CartItem[]
    saveToCart: (book: Book) => void
    removeFromCart: (book: Book) => void
    deleteCart: (book: Book) => void
}

const defaultState: CartContextState = {
    cart: [],
    saveToCart: () => {},
    removeFromCart: () => {},
    deleteCart: () => {}
    
}

const CartContext = createContext<CartContextState>(defaultState)

const CartProvider: React.FC<PropsWithChildren> = ({
    children  
}) => {


const [cart, setCart] = useState<CartItem[]>([])
useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart") || "[]"))
}, []);

  const saveToCart = (book:Book) => {
    //TODO 
    let updatedCart: CartItem[] = []
        const cartItem = cart.find(ci => book.id === ci.book.id)
        if(!cartItem) {

            updatedCart = [...cart, {quantity: 1, book, id: ""+Math.floor(Math.random()*9999)}]
        } else {
            updatedCart = cart.map(ci => {
                if(ci.book.id === book.id) {
                    return {...ci, quantity:cartItem.quantity +1}
                } else {
                    return ci
                }
            })
        }
    localStorage.setItem("cart",JSON.stringify(updatedCart))
    setCart(updatedCart )
  }

  const itemIsLast = (cartItem: CartItem) => cartItem.quantity <= 1

  const removeFromCart = (book: Book) => {
    //TODO
    
    const updatedCart = cart.map(ci => ci.book.id === book.id ? {...ci, quantity: ci.quantity !== 1 ?  ci.quantity-1:1} : ci)
    localStorage.setItem("cart",JSON.stringify(updatedCart))
        setCart(updatedCart)
  }

  const deleteCart = (book:Book) => {
    //TODO
    const updatedCart =  cart.filter(
        ci => ci.book.id !== book.id
    )
    localStorage.setItem("cart",JSON.stringify(updatedCart))
    setCart(updatedCart)
  }

return (
    <CartContext.Provider value={{
        cart,
        saveToCart,
        removeFromCart,
        deleteCart
    }}>
        {children}
    </CartContext.Provider>
)
}

const useCart = ( ) => {
    const cart = useContext(CartContext)
    return cart
}

export{
    useCart
}


export default CartProvider