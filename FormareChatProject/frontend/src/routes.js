import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import LoginConsultor from './pages/LoginConsultor';

import Chat from './pages/Chat';
import Group from './pages/Group';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/chat" component={Chat} />
                <Route path="/loginConsultor" component={LoginConsultor} />
                <Route path="/group" component={Group} />
            </Switch>
        </BrowserRouter>
    );
}