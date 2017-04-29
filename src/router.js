import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import store from './flux/rootStore'
import HomeView from './containers/View/Home'
import PictureList from './containers/Picture/List'

export const App = () => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={HomeView}>
                <Route path="tag/:tag" component={PictureList} />
            </Route>
        </Router>
    </Provider>
)

export default App