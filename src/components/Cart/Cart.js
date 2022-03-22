import { faArrowRight, faBucket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cart = ({ cart }) => {
    // const {cart} = props
    console.log(cart);

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: $1364</p>
            <p>Tax: $1364</p>
            <h4>Grand Total: $1613</h4>
            <button className="clear-cart">
                Clear Cart <FontAwesomeIcon icon={faBucket} />
            </button>
            <button className="review-order">
                Review Order <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
};

export default Cart;
