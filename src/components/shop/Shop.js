import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(12);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/product?page=${page}&size=${size}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [page, size]);

    useEffect(() => {
        fetch("http://localhost:4000/productCount")
            .then((res) => res.json())
            .then((data) => {
                const count = data.count;
                const pages = Math.ceil(count / 12);
                setPageCount(pages);
            });
    }, []);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find((product) => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    const handleAddToCart = (selectedProduct) => {
        const exists = cart.find(
            (product) => product._id === selectedProduct._id
        );
        let newCart;
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(
                (product) => product._id !== selectedProduct._id
            );
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    };

    return (
        <div className="shop-container">
            <div>
                <div className="products-container">
                    {products.map((product) => (
                        <Product
                            product={product}
                            handleAddToCart={handleAddToCart}
                            key={product._id}
                        ></Product>
                    ))}
                </div>
                <div className="pagination">
                    {[...Array(pageCount).keys()].map((number) => (
                        <button
                            key={number}
                            className={page === number ? "selected" : ""}
                            onClick={() => setPage(number)}
                        >
                            {number + 1}
                        </button>
                    ))}
                    <select onChange={(e) => setSize(e.target.value)}>
                        <option value="6">6</option>
                        <option value="12" selected>
                            12
                        </option>
                        <option value="18">18</option>
                        <option value="24">24</option>
                    </select>
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button
                            style={{
                                padding: "10px 40px",
                                margin: "0",
                            }}
                            className="btn-default-style"
                        >
                            Review Order
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
