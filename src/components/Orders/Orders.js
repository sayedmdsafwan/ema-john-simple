import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveFromCart = (product) => {
        console.log(product);
        const rest = cart.filter((pd) => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    };

    const navigate = useNavigate();
    return (
        <div className="shop-container">
            <div className="review-item-container">
                {cart.map((product) => (
                    <ReviewItem
                        handleRemoveFromCart={handleRemoveFromCart}
                        product={product}
                        key={product.id}
                    />
                ))}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button
                        style={{
                            padding: "10px 30px",
                            margin: "0",
                        }}
                        className="btn-default-style"
                        onClick={() => navigate("/shipment")}
                    >
                        Proceed to checkout
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
