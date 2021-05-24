// Dependencys //
import React from "react";
import SideNav from "./SideNav";

// Component //
class SideNavContainer extends React.Component {
    render() {
        return(
            <div id='SideBar'>
                <nav id='SideNavContainer'>
                    <SideNav type='dashboard'/>
                    <SideNav type='courses'/>
                    <SideNav type='timetable'/>
                    <SideNav type='news'/>
                    <SideNav type='settings' id='SettingsNav'/>
                </nav>
            </div>
        );
    }
}

export default SideNavContainer;