import React from 'react';
import "./style.less";

export default class LoginView extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            error: null // Store error messages
        };
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    clickHandler = async () => {
        const { username, password } = this.state;
        try {
            const response = await fetch('http://localhost:3200/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                // Assuming the login Redux action expects an object with a username
                this.props.onLogin({ username });
                window.history.back();
            } else {
                const data = await response.json();
                this.setState({ error: data.message || 'Login failed. Please try again.' });
            }
        } catch (error) {
            this.setState({ error: 'Network error or server is not responding.' });
        }
    }

    render() {
        const { username, password, error } = this.state;
        return (
            <div id="login-container">
                {error && <div className="error-message">{error}</div>}
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username/Phone Number"
                        value={username}
                        onChange={this.changeHandler}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={this.changeHandler}
                    />
                </div>
                <button className="btn-login" onClick={this.clickHandler}>
                    Login
                </button>
                <button className="btn-toggle" onClick={this.props.onToggleSignup}>
                    Don't have an account? Sign up
                </button>
            </div>
        );
    }
}
