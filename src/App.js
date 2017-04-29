import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import HomeView from './containers/View/Home'
import PictureList from './containers/Picture/List'

export const App = () => (
    <Router history={browserHistory}>
        <Route path="/" component={HomeView}>
            <Route path="search" component={PictureList} />
        </Route>
    </Router>
)

export default App