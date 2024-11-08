import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store"; // Adjust path to your store

export const NavBar = () => {
    // Get the cart items length from Redux store
    const cartItemCount = useSelector((state: RootState) => 
        state.cart.items.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0)
    );

    return (
        <div className="flex flex-row gap-2 p-4 bg-base-100 justify-between">
            <Link to="/" className="btn btn-ghost btn-lg normal-case flex flex-row">
                <img src="/img/paradise-nursery-logo.png" alt="logo" className="h-12 rounded-full" />
                <div className="flex flex-col justify-start text-start">
                    <div className="text-2xl font-bold">The Paradise Nursery</div>
                    <div className="text-sm">Where green and healthy lives meet</div>
                </div>
            </Link>
            <Link to="/products" className="btn btn-ghost normal-case text-2xl btn-lg">Products</Link>
            <Link to="/cart" className="btn btn-ghost normal-case text-2xl btn-lg flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                    {cartItemCount}
                </span>
            </Link>
        </div>
    );
};
