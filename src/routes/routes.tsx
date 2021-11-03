import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Contato from '../pages/Contato';

import Index from '../pages/Index';
import Home from '../pages/Landing';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/contato" exact component={Contato}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;