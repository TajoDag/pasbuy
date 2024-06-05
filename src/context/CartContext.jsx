import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(items);
    }, []);

    const addToCart = (newItem) => {
        const existingItemIndex = cartItems.findIndex(item => item._id === newItem._id);
        let updatedCartItems;

        if (existingItemIndex >= 0) {
            updatedCartItems = cartItems.map((item, index) =>
                index === existingItemIndex
                    ? { ...item, quantity: item.quantity + newItem.quantity, totalPrice: (item.quantity + newItem.quantity) * item.price }
                    : item
            );
        } else {
            updatedCartItems = [...cartItems, newItem];
        }

        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const removeFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter(item => item._id !== itemId);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
    };
    const totalItems = cartItems.length;
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalItems, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
