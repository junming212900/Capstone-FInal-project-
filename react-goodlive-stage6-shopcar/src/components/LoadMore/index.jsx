import React from "react"


export default class LoadMore extends React.Component {

    constructor() {
        super();
        this.divContainer = React.createRef();
    }

    srcollHandle() {
        var winHeight = document.documentElement.clientHeight;
        var timer = this;
        // 节流和防抖的操作
        // getBoundingClientRect:left  top  right bottom
        if (this.divContainer.current) {
            let currentElementHeight = this.divContainer.current.getBoundingClientRect().top;
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                if (currentElementHeight < winHeight) {
                    this.props.onLoadMore();
                }
            }, 300)
        } else {
            clearTimeout(timer);
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.srcollHandle.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.srcollHandle);
    }

    render() {
        return (
            <div ref={this.divContainer}>
                LoadMore
            </div>
        )
    }
}