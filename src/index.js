// Dependencys //
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// Components //
import App from './App';
import './App.css';

import Register from "./components/Register";

// Redux //
import ContextStore from "./context/ContextStore";

// Render //
ReactDOM.render(
        <ContextStore>
            <Router>
                <Switch>
                    <Route path='/register' exact component={Register}/>

                    <Route path='/' component={App}/>
                </Switch>
            </Router>
        </ContextStore>,
    document.getElementById('root')
);