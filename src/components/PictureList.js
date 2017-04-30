import React from 'react'

import Picture from './Picture'
import Loader from './Loader'

import "./PictureList.css"

export const PictureList = ({ list, loading }) => (
    <div className="list-container">
        {list.map(pictureData => <Picture key={pictureData.id} data={pictureData} />)}
        { loading && <Loader />}
    </div>
)

export default PictureList