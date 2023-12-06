import React from 'react';
import "./style.less";

export default class SignupView extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            confirmPassword: "",
            error: null
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    signUpHandler = async () => {
        const { username, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            this.setState({ error: "Passwords do not match." });
            return;
        }

        try {
            const response = await fetch('http://localhost:3200/api/signup', { // Use the correct port
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
});

            const data = await response.json();
            if (response.ok) {
                // Clear the form fields
                this.setState({
                    username: "",
                    password: "",
                    confirmPassword: "",
                    error: null
                });
                // Optionally, navigate back to the LoginView
                this.props.onToggleLogin(); // This should be provided by the parent component
            } else {
                this.setState({ error: data.message || 'Signup failed' });
            }
        } catch (error) {
            this.setState({ error: error.message || 'An error occurred.' });
        }
    }

    render() {
        const { username, password, confirmPassword, error } = this.state;

        return (
            <div id="signup-container">
                {error && <div className="error-message">{error}</div>}
                <div className="input-container">
                    <i className="icon-user"></i>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className="input-container">
                    <i className="icon-lock"></i>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className="input-container">
                    <i className="icon-lock"></i>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={this.changeHandler}
                    />
                </div>
                <button className="btn-signup" onClick={this.signUpHandler}>
                    Sign Up
                </button>
                <button className="btn-toggle" onClick={this.props.onToggleLogin}>
                    Already have an account? Log in
                </button>
            </div>
        );
    }
}
