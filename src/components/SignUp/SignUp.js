import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] =
        useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    };

    if (user) {
        navigate("/inventory");
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Did not match password");
            return;
        } else if (password.length < 6) {
            setError("Password should have at least 6 chars");
            return;
        }

        createUserWithEmailAndPassword(email, password);
    };

    return (
        <div>
            <div className="main-div">
                <div className="form-container">
                    <div>
                        <h2 className="form-title">Sign Up</h2>
                        <form onSubmit={handleCreateUser}>
                            <div className="input-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    onBlur={handleEmailBlur}
                                    type="email"
                                    name="email"
                                    id=""
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    onBlur={handlePasswordBlur}
                                    type="password"
                                    name="password"
                                    id="password"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor="confirm-password">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    onBlur={handleConfirmPasswordBlur}
                                    name="confirm-password"
                                    id="confirm-password"
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
                                value="Sign Up"
                            />
                        </form>
                        <p>
                            Already Have an account?{" "}
                            <Link className="form-link" to="/login">
                                Please Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
