import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <nav className="header">
                <img src={logo} alt="Logo" />
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    {user ? (
                        <button onClick={() => signOut(auth)}>Sign Out</button>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;
