import React, { Component } from 'react'


export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl,author, date} = this.props;
    return (
          <div className='my-3'>
              <div className="card" >
                <img src={!imageUrl ?"https:gizmodo.com/app/uploads/2025/01/galaxy-s25ultra.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">{title}<span className='badge rounded-pill bg-secondary'>New</span></h5>
                <p className="card-text">{description}</p>
                <p className='card-text'><small className='text-muted'>By {author} on {date}</small></p>
                <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
