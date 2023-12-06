import React from "react"
import "./style.less"

export default class CityCurrent extends React.Component{
    render(){
        return(
            <div className="current-city">
                <h2>Current City：{ this.props.cityName }</h2>
            </div>
        )
    }
}