import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Product.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;
    const { id, name, price, seller, ratings, img } = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="inner-div">
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)}>
                Add To Cart{" "}
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;
