import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure for a cart item
export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string; // Image URL
}

// Define the structure for the cart state
export interface CartState {
    items: CartItem[];
}

// Initial state for the cart
const initialState: CartState = {
    items: [], // Start with an empty cart
};

// Create the cart slice
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const item = action.payload;
            const existingItem = state.items.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                // If the item already exists, increase its quantity
                existingItem.quantity += item.quantity;
            } else {
                // Otherwise, add the new item to the cart
                state.items.push(item);
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            // Remove an item from the cart by its ID
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            // Update the quantity of an existing item in the cart
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                existingItem.quantity = quantity;
            }
        },
        clearCart: (state) => {
            // Clear the entire cart
            state.items = [];
        },
    },
});

// Export actions for dispatch
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

// Export the reducer to add it to the Redux store
export default cartSlice.reducer;
