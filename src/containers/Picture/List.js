import React from 'react'

import "./List.css"

export default ({ location }) => (
    <main className="list-container">
        <div className="list-picture" style={{backgroundImage: "url(https://c1.staticflickr.com/8/7486/27246616360_1e5002000a_n.jpg)"}}>
            <div className="list-picture-info">
                <h2>Title from the picture</h2>
                <h3>Guilherme Diego</h3>
                <div>
                    <span>#tag</span>
                    <span>#tag</span>
                </div>
            </div>
        </div>
        <div className="list-picture" style={{backgroundImage: "url(https://c1.staticflickr.com/8/7486/27246616360_1e5002000a_n.jpg)"}}>
            <div className="list-picture-info">
                <h2>Title from the picture</h2>
                <h3>Guilherme Diego</h3>
                <div>
                    <span>#tag</span>
                    <span>#tag</span>
                </div>
            </div>
        </div>
        <div className="list-picture" style={{backgroundImage: "url(https://c1.staticflickr.com/8/7486/27246616360_1e5002000a_n.jpg)"}}>
            <div className="list-picture-info">
                <h2>Title from the picture</h2>
                <h3>Guilherme Diego</h3>
                <div>
                    <span>#tag</span>
                    <span>#tag</span>
                </div>
            </div>
        </div>
    </main>
)