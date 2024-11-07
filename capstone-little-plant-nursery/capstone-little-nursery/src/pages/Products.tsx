const prods = [
    {
        id: 1,
        name: "Snake Plant",
        price: 1000,
        description: "Product 1 description",
        image: "https://via.placeholder.com/150",
        category: "Air Purifying Plants",
    },
    {
        id: 2,
        name: "Spider Plant",
        price: 2000,
        description: "Product 2 description",
        image: "https://via.placeholder.com/150",
        category: "Air Purifying Plants",
    },
    {
        id: 3,
        name: "Peace Lilly",
        price: 3000,
        description: "Product 3 description",
        image: "https://via.placeholder.com/150",
        category: "Air Purifying Plants",
    },
    {
        id: 4,
        name: "Lavendar",
        price: 1000,
        description: "Product 1 description",
        image: "https://via.placeholder.com/150",
        category: "Aromatic Fragment Plants",
    },
    {
        id: 5,
        name: "Jasmine",
        price: 2000,
        description: "Product 2 description",
        image: "https://via.placeholder.com/150",
        category: "Aromatic Fragment Plants",
    },
    {
        id: 6,
        name: "Rosemary",
        price: 3000,
        description: "Product 3 description",
        image: "https://via.placeholder.com/150",
        category: "Aromatic Fragment Plants",
    },
]

export const Products = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold">Products</h1>
            <div className="flex flex-row gap-4 justify-between">
                {prods.map(prod => {
                    return (
                        <div key={prod.id}>
                            <h2>{prod.name}</h2>
                            <p>{prod.price}</p>
                            <p>{prod.description}</p>
                            <img src={prod.image} alt={prod.name} />
                            <button onClick={() => console.log(prod)}>Add to Cart</button>
                        </div>
                )})}
            </div>
        </div>
    )
}