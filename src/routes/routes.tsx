import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

//COMPONENTS
import Contato from '../pages/Contato';
import MapSede from '../components/map/mapSede/map';
import MapVilaSandra from '../components/map/mapVilaSandra/map';

import Index from '../pages/Index';
import Home from '../pages/Landing';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/contato" exact component={Contato}/>
            <Route path="/contato/sede" exact component={MapSede}/>
            <Route path="/contato/vilaSandra" exact component={MapVilaSandra}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;