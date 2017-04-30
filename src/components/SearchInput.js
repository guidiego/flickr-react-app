import React from 'react'
import "./SearchInput.css"

export const SearchInput = (props) => (
    <div className="input">
        <input {...props} />
        {props.value && <button className="input-submit">GO!</button> }
    </div>
)

export default SearchInput;