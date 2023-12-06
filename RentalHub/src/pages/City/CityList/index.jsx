import React from "react"
import "./style.less"
import store from "../../../utils/store"

export default class CityList extends React.Component {

    cityClickHandler = (data) => {
        this.props.changeCity({
            cityName:data
        })
        
        store.setItem('city',data);
        window.history.back();
    }

    render() {
        return (
            <div className="city-list-container">
                <h3>Commend City </h3>
                <ul className="clear-fix">
                    <li onClick={(e) => { this.cityClickHandler('SLC', e) }}><span>Salt Lake City</span></li>
                    <li onClick={(e) => this.cityClickHandler('NY', e)}><span>New York</span></li>
                    <li onClick={(e) => this.cityClickHandler('NJ', e)}><span>New Jersey</span></li>
                    <li onClick={(e) => this.cityClickHandler('LA', e)}><span>Los Angeles</span></li>
                    <li onClick={(e) => this.cityClickHandler('DC', e)}><span>DC</span></li>
                    <li onClick={(e) => this.cityClickHandler('SFO', e)}><span>San Francisco</span></li>
                    <li onClick={(e) => this.cityClickHandler('BOS', e)}><span>Boston</span></li>
                    <li onClick={(e) => this.cityClickHandler('TOR', e)}><span>Toronto</span></li>
                    <li onClick={(e) => this.cityClickHandler('OKC', e)}><span>Oklahoma City</span></li>
                    <li onClick={(e) => this.cityClickHandler('BOS', e)}><span>Bosie</span></li>
                    <li onClick={(e) => this.cityClickHandler('SEA', e)}><span>Seattle</span></li>
                    <li onClick={(e) => this.cityClickHandler('MIA', e)}><span>Miami</span></li>
                    <li onClick={(e) => this.cityClickHandler('OAK', e)}><span>Oakland</span></li>
                    <li onClick={(e) => this.cityClickHandler('ORL', e)}><span>Olando</span></li>
                    <li onClick={(e) => this.cityClickHandler('DAL', e)}><span>Dallas</span></li>
                    <li onClick={(e) => this.cityClickHandler('HOU', e)}><span>Houston</span></li>
                    <li onClick={(e) => this.cityClickHandler('NOLA ', e)}><span>New Orleans</span></li>
                    <li onClick={(e) => this.cityClickHandler('CHI', e)}><span>Chicago</span></li>
                </ul>
            </div>
        )
    }
}