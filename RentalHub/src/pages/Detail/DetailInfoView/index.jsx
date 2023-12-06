import React from "react";
import Tabs from "../../../components/tabs";
import Comment from "../Comment";
import BuyAndStore from "../BuyAndStore";
import "./style.less";

export default class DetailInfoView extends React.Component {
    // Add the handleSave method
    handleSave = () => {
        // Placeholder: Add your save logic here
        console.log('Save functionality goes here');
    }

    render() {
        const { data } = this.props;
        return (
            <div className="detail-container">
                <Tabs>
                    <div tabName="House Information" className="tab-content">
                        
                        <div className="detail-info">
                            <h3 className="title">{data.title}</h3>
                            <div className="price-info">
                                <span className="price">{data.price}/month</span>
                                <p className="rent-label">Rent</p>
                            </div>
                            <div className="details-box">
                                <ul className="details-list">
                                    <li>
                                    <p>House Type</p>
                                        <span>{data.info.type}</span>
                                    </li>
                                    <li>
                                    <p>Area</p>
                                        <span>{data.houseType}</span>
                                        
                                    </li>
                                </ul>
                            </div>
                            <div className="additional-info">
                                <p>Floor: {data.info.level}</p>
                                <p>Decoration: {data.info.style}</p>
                                <p>Type: {data.info.type}</p>
                                <p>Orientation: {data.info.orientation}</p>
                                <p>Year: {data.info.years}</p>
                            </div>
                        </div>
                        {/* Make sure to adjust BuyAndStore if it has "Save" and "Buy Now" buttons */}
                        <BuyAndStore id={this.props.id}/>
                    </div>
                    <div tabName="House Reviews" className="tab-content">
                        <Comment id={this.props.id} />
                    </div>
                </Tabs>
            </div>
        );
    }
}
