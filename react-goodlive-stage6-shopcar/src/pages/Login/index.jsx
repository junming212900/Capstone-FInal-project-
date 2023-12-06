import React, { useState } from "react";
import LoginView from "./LoginView";
import SignupView from "./SignupView"; // Ensure this path is correct
import { connect } from "react-redux";
import { login as loginAction } from "../../actions/login";

const Login = ({ loginAction }) => {
    const [isSigningUp, setIsSigningUp] = useState(false);

    const handleLogin = (credentials) => {
        // Perform the login action here, e.g., dispatching a Redux action
        loginAction(credentials);
        // Any additional login logic
    };

    const toggleLoginSignup = () => {
        setIsSigningUp(!isSigningUp); // This toggles between login and signup views
    };

    return (
        <div>
            {isSigningUp ? (
                <SignupView onToggleLogin={toggleLoginSignup} />
            ) : (
                <LoginView onLogin={handleLogin} onToggleSignup={toggleLoginSignup} />
            )}
        </div>
    );
};

export default connect(null, { loginAction })(Login);
