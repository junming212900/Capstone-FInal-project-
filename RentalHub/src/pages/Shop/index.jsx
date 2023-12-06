import React from "react";
import FootNav from "../../components/FootNav";

export default class Shop extends React.Component {
    componentDidMount() {
        // Redirect to Yelp when the component mounts
        window.location.href = "https://www.yelp.com";
    }

    render() {
        return (
            <div>
                Redirecting to Shop...
                <FootNav />
            </div>
        );
    }
}
