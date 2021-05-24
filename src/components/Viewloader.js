// Dependencys //
import React from "react";
import {Switch, Route} from 'react-router-dom';

import Dashboard from "./Views/Dashboard/Dashboard";

import './styles/ViewAllign.css';

import Courses from "./Views/Courses/Courses";
import Timetable from "./Views/TimeTable/Timetable";
import News from "./Views/News/News";
import Settings from "./Views/Settings/Settings";

// Component //
function ViewLoader() {

    return(
        <div id='ViewContainer'>
            <Switch>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/courses' component={Courses}/>
                <Route path='/timetable' component={Timetable}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
            </Switch>
        </div>
    );
}

export default ViewLoader;