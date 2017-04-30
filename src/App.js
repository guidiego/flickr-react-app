import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import store from './flux/rootStore'
import HomeView from './containers/Home'

export const App = () => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={HomeView} />
        </Router>
    </Provider>
)

export default App