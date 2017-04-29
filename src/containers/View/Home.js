import React from 'react'
import cx from 'classnames'

import "./Home.css"

export default ({ children }) => (
    <div className={cx('home-container', {'search-minify': children})}>
        <div className='search'>
            <h1> Search any Image on <b>Flickr</b> by tag!</h1>
            <div className="input">
                <input placeholder="puppies, cats, cars..." />
            </div>
        </div>
        { children }
    </div>
)