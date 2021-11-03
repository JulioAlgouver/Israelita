import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

import Index from '../pages/Index';
import Home from '../pages/Landing';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/home" exact component={Home}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;