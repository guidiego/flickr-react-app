import React from 'react'
import cx from 'classnames'

import './SearchBlock.css'

export const SearchBlock = ({ children, minified }) => (
    <div className={cx('search-block', {'search-minify': minified})}>
        <h1> Search any Image on <b>Flickr</b> by tag!</h1>
        { children }
    </div>
)

export default SearchBlock;