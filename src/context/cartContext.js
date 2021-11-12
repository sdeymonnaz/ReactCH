import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({defaultValue = [], children}) => {
    const [items, setItems] = useState(defaultValue);
    const [countItems, setCountItems] = useState(0);

    const addItem = (currentItem) => {
        if (items.some(({item}) => item.id === currentItem.item.id)) {

        return;
        }
        setItems([...items, currentItem]);

    };

    const removeItem = (currentItem) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].item.id === currentItem.itemId) {
                setItems(items.filter(item => item.item.id !== currentItem.itemId));
                return;
            }
        }
    };
    
    const clearCart = () => setItems(defaultValue);

    const isInCart = (itemId) => {
        if (items.some(({item}) => item.id === itemId.itemId)) {

            return true;
        }

        return false;
    };

    const countItemsInCart = () => {
        let countTotal = 0;
        for (let i = 0; i < items.length; i++) {
            setCountItems(countTotal += items[i].quantity);
        }
        setCountItems(countTotal);
        return countTotal;
    }


    return (
        <CartContext.Provider 
        value={{
            items,
            addItem,
            removeItem,
            clearCart,
            isInCart,
            countItemsInCart,
            countItems
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

