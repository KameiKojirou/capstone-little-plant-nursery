import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice"; // Adjust the path to your cartSlice

const prods = [
    {
        id: 1,
        name: "Snake Plant",
        price: 1000,
        description: "Product 1 description",
        image: "./img/products/snake.webp",
        category: "Air Purifying Plants",
    },
    {
        id: 2,
        name: "Spider Plant",
        price: 2000,
        description: "Product 2 description",
        image: "./img/products/spider.webp",
        category: "Air Purifying Plants",
    },
    {
        id: 3,
        name: "Peace Lilly",
        price: 3000,
        description: "Product 3 description",
        image: "./img/products/peacelilly.webp",
        category: "Air Purifying Plants",
    },
    {
        id: 4,
        name: "Lavender",
        price: 1000,
        description: "Product 1 description",
        image: "./img/products/lavender.webp",
        category: "Aromatic Fragment Plants",
    },
    {
        id: 5,
        name: "Jasmine",
        price: 2000,
        description: "Product 2 description",
        image: "./img/products/jasmine.webp",
        category: "Aromatic Fragment Plants",
    },
    {
        id: 6,
        name: "Rosemary",
        price: 3000,
        description: "Product 3 description",
        image: "./img/products/rosemary.png",
        category: "Aromatic Fragment Plants",
    },
];

export const Products = () => {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState<number[]>([]); // Track IDs of products added to cart

    const handleAddToCart = (product: typeof prods[number]) => {
        const itemToAdd = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1, // Default quantity
            image: product.image, // Include the image property
        };
        console.log("Dispatching to cart:", itemToAdd); // Debugging log
        dispatch(addItem(itemToAdd));
        setAddedToCart((prev) => [...prev, product.id]); // Mark product as added
    };

    const isProductAdded = (id: number) => addedToCart.includes(id); // Check if product is already added

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mb-16">Products</h1>

            {/* Display filtered products */}
            <h2 className="text-2xl font-bold text-center my-8">Air Purifying Plants</h2>

            <div className="flex flex-row gap-4 justify-between flex-wrap">
                {prods.filter(prod => prod.category === "Air Purifying Plants").map(prod => (
                    <div key={prod.id} className="border p-4 rounded shadow-md lg:w-[30%] w-full">
                        <h2 className="text-xl font-semibold">{prod.name}</h2>
                        <p className="text-gray-600">Price: ${prod.price}</p>
                        <p>{prod.description}</p>
                        <img src={prod.image} alt={prod.name} className="object-cover my-2 w-full h-auto" />
                        <button
                            onClick={() => handleAddToCart(prod)}
                            disabled={isProductAdded(prod.id)} // Disable if already added
                            className={`px-4 py-2 mt-2 rounded w-full ${
                                isProductAdded(prod.id)
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 text-white"
                            }`}
                        >
                            {isProductAdded(prod.id) ? "Added to Cart" : "Add to Cart"}
                        </button>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold text-center my-8">Aromatic Fragment Plants</h2>

            <div className="flex flex-col lg:flex-row gap-4 justify-between flex-wrap">
                {prods.filter(prod => prod.category === "Aromatic Fragment Plants").map(prod => (
                    <div key={prod.id} className="border p-4 rounded shadow-md lg:w-[30%] w-full">
                        <h2 className="text-xl font-semibold">{prod.name}</h2>
                        <p className="text-gray-600">Price: ${prod.price}</p>
                        <p>{prod.description}</p>
                        <img src={prod.image} alt={prod.name} className="object-cover my-2 w-full h-auto" />
                        <button
                            onClick={() => handleAddToCart(prod)}
                            disabled={isProductAdded(prod.id)} // Disable if already added
                            className={`px-4 py-2 mt-2 rounded w-full ${
                                isProductAdded(prod.id)
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-blue-500 text-white"
                            }`}
                        >
                            {isProductAdded(prod.id) ? "Added to Cart" : "Add to Cart"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
