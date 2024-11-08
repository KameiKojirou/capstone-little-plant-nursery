import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store"; // Import the RootState type
import { updateQuantity, removeItem } from "../features/cart/cartSlice"; // Adjust the path


//type productItem
type Item = {
    name: string,
    id: number,
    price: number,
    quantity: number,
}

export const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items); // Typed state selector
    const dispatch = useDispatch();

    const handleQuantityChange = (id: number, quantity: number) => {
        if (quantity > 0) {
            dispatch(updateQuantity({ id, quantity }));
        }
    };

    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id));
    };

    const calculateTotal = (): number => {
        return cartItems.reduce((total: number, item: { price: number; quantity: number; }) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-center text-lg">Your cart is empty.</p>
            ) : (
                <div>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Item</th>
                                <th className="border border-gray-300 px-4 py-2">Price</th>
                                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                                <th className="border border-gray-300 px-4 py-2">Subtotal</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item: Item) => (
                                <tr key={item.id}>
                                    <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">${item.price}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                handleQuantityChange(item.id, parseInt(e.target.value, 10))
                                            }
                                            className="w-16 text-center border border-gray-300"
                                        />
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        ${item.price * item.quantity}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <button
                                            onClick={() => handleRemoveItem(item.id)}
                                            className="bg-red-500 text-white px-4 py-2 rounded"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="text-right mt-4">
                        <h2 className="text-2xl font-bold">
                            Total: ${calculateTotal()}
                        </h2>
                    </div>
                </div>
            )}
        </div>
    );
};
