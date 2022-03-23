import { faArrowRight, faBucket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cart = ({ cart }) => {
    // const {cart} = props

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.03).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
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
