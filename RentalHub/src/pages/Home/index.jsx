import React from "react"
import FootNav from "../../components/FootNav"
import HomeHead from "../../components/Head"
import HomeSwiper from "../../components/Swiper"
import banner1 from "../../static/images/image1.jpg"
import banner2 from "../../static/images/image2.jpg"
import banner3 from "../../static/images/image3.jpg"
import banner4 from "../../static/images/image4.jpg"
import banner5 from "../../static/images/image5.jpg"
import banner6 from "../../static/images/image6.jpg"
import HomeHot from "./HomeHot"
import { connect } from "react-redux"
import "./Home.css"
class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeHead cityName={ this.props.city.cityName }/>
                <HomeSwiper banners={[banner1,banner2,banner3,banner4,banner5,banner6]}/>
                <HomeHot cityName={ this.props.city.cityName }/>
                <FootNav />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        city:state.city
    }
}

export default connect(mapStateToProps)(Home)