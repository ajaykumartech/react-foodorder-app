import React from 'react';
                                       
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem:(item) => {},
    remmoveItem:(item) => {},
    clearCart:() =>{}
});

export default CartContext;