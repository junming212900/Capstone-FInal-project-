// Detail/Buyandstore/index
import React from "react";
import BuyAndStoreView from "../BuyAndStoreView";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { collect, unCollect } from "../../../actions/collect";

class BuyAndStore extends React.Component {
    constructor() {
        super();
        this.state = {
            isCollect: false
        };
    }

    componentDidMount() {
        this.setState({
            isCollect: this.isStore()
        });
    }

    storeHandle = () => {
        const username = this.props.login.username;
        if (username) {
            if (this.isStore()) {
                // Cancel collect
                this.props.unCollect({
                    id: this.props.id
                });
                this.setState({
                    isCollect: false
                });
            } else {
                // Collect
                this.props.collect({
                    id: this.props.id
                });
                this.setState({
                    isCollect: true
                });
            }
        } else {
            // If not logged in, redirect to login
            this.props.history.push("/login");
        }
    };

    buyHandle = () => {
        // // Check if the user is logged in
        const username = this.props.login.username;
        if (username) {
            // If logged in, navigate to the BuyPage
            const productId = this.props.id; // Assuming this.props.id is the current product id
            this.props.history.push(`/detail/${productId}/buy`); // Update the path as needed
        } else {
            // If not logged in, redirect to login
            this.props.history.push("/login");
        }
    }
    // buyHandle = () => {
    //     const productId = this.props.id; // Assuming this.props.id is the current product id
    //    this.props.history.push(`/detail/${productId}/buy`); 
    // }
    

    isStore() {
        const currentId = this.props.id;
        const collects = this.props.collects;
        return collects.some((element) => {
            return element.id === currentId;
        });
    }

    render() {
        return (
            <BuyAndStoreView 
                isCollect={this.state.isCollect} 
                onStore={this.storeHandle}
                onBuy={this.buyHandle} // Passing buyHandle to BuyAndStoreView
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        collects: state.collect
    };
};

const mapDispatchToProps = { collect, unCollect };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BuyAndStore));
