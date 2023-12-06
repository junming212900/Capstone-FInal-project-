import React from "react"
import "./style.less"
import api from "../../../../api"

export default class Item extends React.Component {

    constructor() {
        super();
        this.state = {
            commentState: 0
        }
        this.feelBackText = React.createRef();
    }

    componentDidMount() {
        this.setState({
            commentState: this.props.data.commentState
        })
    }

    clickHandle = () => {
        this.setState({
            commentState: 1
        })
    }

    onSubmitHandler = () => {
        if (this.feelBackText.current.value) {
            api.postComment({
                content: this.feelBackText.current.value
            }).then(res => res.json())
                .then(data => {
                    if (data.msg) {
                        this.setState({
                            commentState: 2
                        })
                    }
                })
        }else{
            alert("Please enter your comment")
        }
    }

    onCancelHandler = () => {
        this.setState({
            commentState: 0
        })
    }

    render() {
        const data = this.props.data;
        const { commentState } = this.state;
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img} />
                </div>
                <div className="order-item-comment float-right">
                    {
                        commentState === 0 ?
                            <button className="btn" onClick={this.clickHandle}>How's it</button>
                            : commentState === 1 ? '' :
                                <button className="unseleted-btn btn">Thank your command </button>
                    }
                </div>
                <div className="order-item-content">
                    <span>Title：{data.title}</span>
                    <span>Type：{data.houseType}</span>
                    <span>Price：￥{data.price}</span>
                </div>
                {
                    commentState === 1 ?
                        <div className="comment-text-container">
                            <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref={this.feelBackText}></textarea>
                            <button className="btn" onClick={this.onSubmitHandler}>Submit</button>
                            <button className="btn unseleted-btn" onClick={this.onCancelHandler}>Cancel</button>
                        </div>
                        : ""
                }

            </div>
        )
    }
}