import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <div className="flex flex-row gap-2 p-4 bg-base-100 justify-between">
            <Link to="/" className="btn btn-ghost normal-case text-xl">Paradise Nursery</Link>
            <Link to="/products" className="btn btn-ghost normal-case text-xl">Products</Link>
            <Link to="/cart" className="btn btn-ghost normal-case text-xl">Cart</Link>
        </div>
    );
};