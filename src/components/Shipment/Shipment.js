import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    const handleNameBlur = (event) => {
        setName(event.target.value);
    };
    const handleAddressBlur = (event) => {
        setAddress(event.target.value);
    };
    const handlePhoneBlur = (event) => {
        setPhone(event.target.value);
    };

    const handleCreateUser = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className="main-div">
                <div className="form-container">
                    <div>
                        <h2 className="form-title">Shipping info</h2>
                        <form onSubmit={handleCreateUser}>
                            <div className="input-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    onBlur={handleNameBlur}
                                    type="name"
                                    name="name"
                                    id="name"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    value={user?.email}
                                    readOnly
                                    style={{ color: "GrayText" }}
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="address">Address</label>
                                <input
                                    onBlur={handleAddressBlur}
                                    type="address"
                                    name="address"
                                    id="address"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="text"
                                    onBlur={handlePhoneBlur}
                                    name="phone"
                                    id="phone"
                                    required
                                />
                            </div>
                            {error && (
                                <p
                                    style={{
                                        color: "coral",
                                    }}
                                >
                                    {error}
                                </p>
                            )}
                            <input
                                className="form-submit"
                                type="submit"
                                value="Add Shipping"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipment;
