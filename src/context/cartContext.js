import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({defaultValue = [], children}) => {
    const [items, setItems] = useState(defaultValue);
    console.log('Items en context', items);

    const addItem = (currentItem) => {
        console.log('currentItem', currentItem);
        if (items.some(({item}) => item.id === currentItem.item.id)) {
            console.log('addItem currentItem id esta en carrito', items);
        return;
        }
        setItems([...items, currentItem]);
        console.log('addItem currentItem id NO esta en carrito', items);
    };

    const removeItem = (itemId) => {
        setItems(items.filter(({item}) => item.id !== parseInt(itemId.itemId)));
        return items
    };
    
    const clearCart = () => setItems(defaultValue);

    const isInCart = (itemId) => {
        if (items.some(({item}) => item.id === parseInt(itemId.itemId))) {
            console.log('itemId en carrito true');
            return true;
        }
        console.log('itemId en carrito false');
        return false;
    };

    return (
        <CartContext.Provider 
        value={{
            items,
            addItem,
            removeItem,
            clearCart,
            isInCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

