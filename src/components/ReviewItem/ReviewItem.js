import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

const ReviewItem = (props) => {
    const { product, handleRemoveFromCart } = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className="review-item">
            <img src={img} alt="" />
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <h2 title={name}>
                        {name.length > 20 ? name.slice(0, 20) + "..." : name}
                    </h2>
                    <p>Price: {price}</p>
                    <p>Shipping Cost: {shipping}</p>
                </div>
                <div className="delete-container">
                    <button
                        onClick={() => handleRemoveFromCart(product)}
                        className="delete-icon"
                    >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
