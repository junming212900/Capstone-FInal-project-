import React from "react"
import DetailInfo from "./DetailInfo"
import DetailHead from "../../components/HeadTitle"

export default class Detail extends React.Component{
    render(){
        return(
            <div>
                <DetailHead title={'Details'}/>
                <DetailInfo id={ this.props.match.params.id  }/>
            </div>
        )
    }
}