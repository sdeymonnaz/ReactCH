import { createContext, useState } from 'react';

export const CartContext = createContext([]);

export const CartProvider = ({defaultValue = [], children}) => {
    const [items, setItems] = useState(defaultValue);
    const [countItems, setCountItems] = useState(0);
    //console.log('Items en context', items);

    const addItem = (currentItem) => {
        //console.log('currentItem', currentItem);
        if (items.some(({item}) => item.id === currentItem.item.id)) {
            //console.log('addItem currentItem id esta en carrito', items);
        return;
        }
        setItems([...items, currentItem]);
        //console.log('addItem currentItem id NO esta en carrito', items);
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
        if (items.some(({item}) => item.id === parseInt(itemId.itemId))) {
            console.log('itemId en carrito true');
            return true;
        }
        console.log('itemId en carrito false');
        return false;
    };

    const countItemsInCart = () => {
        console.log('countItemsInCart en cartContext', items);
        console.log('items length en cartContext', items.length)
        let countTotal = 0;
        for (let i = 0; i < items.length; i++) {
            setCountItems(countTotal += items[i].quantity);
        }
        setCountItems(countTotal);
        console.log('countItemsInCart en cartContext', countTotal);
        return countTotal;
    }

    //const countItemsInCart = items.reduce((prev, current) => prev + current.quantity, 0);

    return (
        <CartContext.Provider 
        value={{
            items,
            addItem,
            removeItem,
            clearCart,
            isInCart,
            countItemsInCart,
        }}
        >
            {children}
        </CartContext.Provider>
    )
}

