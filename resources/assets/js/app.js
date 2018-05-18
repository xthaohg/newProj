import React from 'react'
import { render } from 'react-dom'
import {
    Router,
    Route,
    Switch
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import CreateUser from './components/CreateUser'
import EditUser from './components/EditUser'
import UserList from './components/UserList'

const history = createBrowserHistory()
render (
    <Router history={history}>
        <Switch>
            <Route path='/users/create' component={CreateUser} />
            <Route path='/users/edit/:id' component={EditUser} />
            <Route path='/' component={UserList} />
        </Switch>
    </Router>, document.getElementById('app'))