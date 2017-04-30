import React from 'react'

import './Picture.css'

export const splitTitle = title => {
    if (title.lenght > 40) return title
    return title.split('').slice(0, 40).join('') + '...'
}

export const Picture = ({ data }) => (
    <a href={data.link} target="_blank" className="picture" style={{backgroundImage: `url(${data.thumbnail})`}}>
        <div className="picture-info">
            <h2>{ data.title ? splitTitle(data.title) : 'Untitled' } </h2>
            <h3>{ data.owner ? data.owner : 'Without owner'} <small> {data.date} </small></h3>
            <div className="picture-tags">
                { data.tags.map(t => (<span className="tag" key={t.id}>#{t.raw}</span>)) }
            </div>
        </div>
    </a>
)

export default Picture