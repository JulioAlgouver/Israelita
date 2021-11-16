import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

//COMPONENTS
import Index from '../pages/Index';
import Home from '../pages/Landing';
import Sobre from '../pages/Sobre';
import Agenda from '../pages/Agenda';
import Cultos from '../pages/Cultos';
import Radio from '../pages/Radio';
import Testemunhos from '../pages/Testemunhos';
import Oferta from '../pages/Oferta';
import Contato from '../pages/Contato';
import MapSede from '../components/map/mapSede/map';
import MapVilaSandra from '../components/map/mapVilaSandra/map';
import Galeria from '../pages/Galeria';


const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Index}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/sobre" exact component={Sobre}/>
            <Route path="/galeria" exact component={Galeria}/>
            <Route path="/agenda" exact component={Agenda}/>
            <Route path="/cultos" exact component={Cultos}/>
            <Route path="/radio" exact component={Radio}/>
            <Route path="/testemunhos" exact component={Testemunhos}/>
            <Route path="/oferta" exact component={Oferta}/>
            <Route path="/contato" exact component={Contato}/>
            <Route path="/contato/sede" exact component={MapSede}/>
            <Route path="/contato/vilaSandra" exact component={MapVilaSandra}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;