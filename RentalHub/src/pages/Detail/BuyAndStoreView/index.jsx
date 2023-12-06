import React from "react";
import "./style.less";

export default class BuyAndStoreView extends React.Component {

    render() {
        return (
            <div>
                <div className="buy-store-container clear-fix">
                    <div className="item-container float-left">
                        {
                            this.props.isCollect ?
                            <button className="selected o" onClick={this.props.onStore}>Saved</button> :
                            <button className="selected" onClick={this.props.onStore}>Save</button>
                        }
                    </div>
                    <div className="item-container float-right">
                        <button onClick={this.props.onBuy}>Buy Now</button>
                    </div>
                </div>
            </div>
        )
    }
}