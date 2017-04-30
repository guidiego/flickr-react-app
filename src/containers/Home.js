import React, { Component } from 'react'

import SearchBlock from '../components/SearchBlock'
import SearchInput from '../components/SearchInput'
import PictureList from '../components/PictureList'

import { updateTag, fetchingPictures } from '../flux/picture/actions'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import "./Base.css"

export const mapStateToProps = (state) => ({
    tag: state.getIn(["picture", "tag"]),
    list: state.getIn(["picture", "list"]),
    loading: state.getIn(["picture", "loading"]),
    page: state.getIn(["picture", "page"])
})

export const mapDispatchToProps = (dispatch) => ({
    updateTag: (val) => dispatch(updateTag(val)),
    callNextPage: (tags, page) => dispatch(fetchingPictures(tags, page))
})

export const searchSubmit = tag => e => {
    e.preventDefault()
    browserHistory.push({pathname: "/", query: {tags: tag}})
}

export const Home = ({ location, list, loading, updateTag, tag }) => (
    <form onSubmit={searchSubmit(tag)} className='fluid-container'>
        <SearchBlock minified={location.search !== ""}>
            <SearchInput value={tag} onChange={updateTag} placeholder='puppies, cats, cars...' />
        </SearchBlock>
        <PictureList list={list} loading={loading}/> 
    </form>
)

export class HomeWrapper extends Component {
    constructor(props) {
        super(props)
    
        if (this.props.location.query.tags) {
            this.props.updateTag(this.props.location.query.tags)
            this.props.callNextPage(this.props.location.query.tags, this.props.page)
        }
    
        this.scroll = this.scroll.bind(this)
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.scroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scroll)
    } 
    
    scroll() {
        const distToBottom = Math.max(document.body.offsetHeight - (window.pageYOffset + window.innerHeight), 0);
        if ((distToBottom <= 0 && distToBottom > 8888) || this.props.loading || !this.props.location.query.tags) return

        this.props.callNextPage(this.props.location.query.tags, this.props.page)
    }
    
    render() {
        return (
            <Home 
                location={this.props.location}
                list={this.props.list}
                loading={this.props.loading}
                updateTag={(e) => this.props.updateTag(e.target.value)}
                tag={this.props.tag}
            />
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeWrapper)