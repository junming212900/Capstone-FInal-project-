import React from "react";
import FootNav from "../../components/FootNav";

export default class Shop extends React.Component {
    componentDidMount() {
        // Redirect to Yelp when the component mounts
        window.location.href = "https://www.groupon.com/search?query=service";
    }

    render() {
        return (
            <div>
                Redirecting to Life Service ...
                <FootNav />
            </div>
        );
    }
}