import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { updateQuantity, removeItem } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export const Cart = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    console.log("Cart items from Redux state:", cartItems); // Debugging log
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
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-8">Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-center text-lg">Your cart is empty.</p>
            ) : (
                <div>
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Image</th>
                                <th className="border border-gray-300 px-4 py-2">Item</th>
                                <th className="border border-gray-300 px-4 py-2">Price</th>
                                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                                <th className="border border-gray-300 px-4 py-2">Subtotal</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <img
                                            src={item.image} // Fallback
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded"
                                            onError={(e) => {
                                                e.currentTarget.src = "/img/placeholder.webp"; // Fallback
                                            }}
                                        />
                                    </td>
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
            <div className="flex flex-col gap-2 justify-center">
                <Link to="/products" className="btn btn-primary normal-case text-2xl btn-lg mt-8">Continue Shopping</Link>
                <Link to="/products" className="btn btn-secondary normal-case text-2xl btn-lg mt-8">Checkout</Link>
            </div>
        </div>
    );
};
