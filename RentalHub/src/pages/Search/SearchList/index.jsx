import React from "react"
import api from "../../../api"
import SearchListView from "../SearchListView"
import LoadMore from "../../../components/LoadMore"
import { resolve } from "dns";

export default class SearchList extends React.Component {

    constructor() {
        super();
        this.state = {
            searchData: [],
            hasMore: false,
            page: 1,
            isLoading: false
        }
    }

    http(keywords, cityName, page) {
        this.setState({ isLoading: true })
        api.getSearch({
            keywords: keywords,
            city: cityName,
            page: page
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    searchData: this.state.searchData.concat(data.data),
                    hasMore: data.hasMore,
                    page: this.state.page + 1,
                    isLoading: false
                })
            })
    }

    componentDidMount() {
        const keywords = this.props.keywords;
        const cityName = this.props.cityName
        const page = this.state.page;
        this.http(keywords, cityName, page);
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.keywords !== this.props.keywords) {
            const keywords = this.props.keywords;
            const cityName = this.props.cityName
            await this.setStateAsync({
                page: 1,
                searchData: []
            });
            this.http(keywords, cityName, this.state.page);
        }
    }

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        })
    }

    loadMoreHandle = () => {
        if (!this.state.isLoading) {
            const keywords = this.props.keywords;
            const cityName = this.props.cityName;
            const page = this.state.page;
            this.http(keywords, cityName, page);
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.searchData.length > 0 ?
                        <SearchListView data={this.state.searchData} /> :
                        <div>Loading...</div>
                }
                {
                    this.state.hasMore ?
                        <LoadMore onLoadMore={this.loadMoreHandle} /> :
                        <div>No More</div>
                }

            </div>
        )
    }
}