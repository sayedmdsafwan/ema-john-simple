import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./LogIn.css";

const LogIn = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };

    const handleSignInForm = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    return (
        <div className="main-div">
            <div className="form-container">
                <div>
                    <h2 className="form-title">Login</h2>
                    <form onSubmit={handleSignInForm}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                onBlur={handleEmailBlur}
                                type="email"
                                name="email"
                                id="email"
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

                        {error && <p style={{ color: "coral" }}>{error}</p>}
                        {loading && <p>Loading...</p>}

                        <input
                            className="form-submit"
                            type="submit"
                            value="Login"
                        />
                    </form>
                    <p>
                        New to Ema-John?{" "}
                        <Link className="form-link" to="/signup">
                            Create an account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
