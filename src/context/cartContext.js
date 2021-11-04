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

    const removeItem = (currentItem) => {
        console.log('currentItem en CartContext', currentItem);
        console.log('currentItem.item.id en CartContext', currentItem.itemId);
        console.log('items in CartContext', items);
        for (let i = 0; i < items.length; i++) {
            console.log('items[i].item.id en CartContext', items[i].item.id);
            if (items[i].item.id === currentItem.itemId) {
                setItems(items.filter(item => item.item.id !== currentItem.itemId));
                return;
            }
        }
        // console.log('items.item en CartContext', items.item);
        // setItems(items.filter(({item}) => item.id !== parseInt(currentItem.item.id)));
        // console.log('items despues de borrar',items)
        // return items
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

