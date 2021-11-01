import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({defaultValue = [], children}) => {
    const [items, setItems] = useState(defaultValue);
    console.log('Items en context', items);

    const addItem = (currentItem) => {
        console.log('currentItem', currentItem);
        console.log(items.some(({item}) => item.id === currentItem.item.id))
        if (items.some(({item}) => item.id === currentItem.item.id)) {
            console.log('items en true', items);
        return;
        }
        setItems([...items, currentItem]);
        console.log('items en false', items);
    };

    const removeItem = (itemId) => {
        console.log('itemId', itemId);
        console.log('items', items);
        return setItems(items.filter(({item}) => item.id !== itemId.id));
    };

    const clearCart = () => setItems(defaultValue);

    const isInCart = (itemId) => {
        console.log('itemId', itemId);
        console.log('items', items);
        if (items.some(({item}) => item.id === itemId.id)) {
            console.log('true');
            return true;
        }
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

