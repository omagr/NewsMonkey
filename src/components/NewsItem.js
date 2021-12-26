import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItem extends Component {
    constructor() {
        super()
    }


    render() {
        let { title, description, urlToImage, newsUrl, author, date } = this.props;
        return (
            <div>

                <div className="card" style={{ width: '18rem' }}>
                    <img src={urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text">by {author} on {date}</p>

                        <a href={newsUrl} target="_blank" className="btn btn-primary">Read More...</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default NewsItem
