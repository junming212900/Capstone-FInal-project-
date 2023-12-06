// Mine/index.jsx
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"; // Import withRouter
import FootNav from "../../components/FootNav";
import MineHead from "../../components/HeadTitle";
import styles from './Mine.module.css';

class Mine extends React.Component {

    componentDidMount() {
        // Redirect to the login page if the user is not logged in
        if (!this.props.login.username) {
            this.props.history.push("/login");
        }
    }

    handleStayHistoryClick = () => {
        // Navigate to the Cart page
        this.props.history.push("/cart");
    }

    render() {
        const { username, cityName } = this.props.login;
        return (
            <div className={styles.mineContainer}>
                <MineHead title='My Page' className={styles.header}/>
                <div className={styles.userInfo}>
                    <h2>Welcome, {username}</h2>
                    <p>City: { this.props.city.cityName }</p>
                </div>
                <button className={styles.button} onClick={this.handleStayHistoryClick}>
                    Stay History
                </button>
                <button className={styles.button}>My List</button>
                <FootNav />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        login: state.login,
        city: state.city
    };
};

// Wrap the component with withRouter to have access to the history prop
export default withRouter(connect(mapStateToProps)(Mine));
