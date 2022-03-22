import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <nav className="header">
                <img src={logo} alt="Logo" />
                <div>
                    <a href="/about">Shop</a>
                    <a href="/about">Orders</a>
                    <a href="/about">Inventory</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
