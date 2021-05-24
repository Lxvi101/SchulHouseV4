// Dependencys //
import React from "react";
import DWidget from "./DashboardWidget";

// Component //
function Dashboard() {
    return(
        <div id='dsb_grid'>
            {/* Add Widgets dynamically */}
            <div id={'dsb_wrapper'}>
                <div id='dsb_widgetcontainer'>
                    <DWidget type='WORK' id={'dsb_uWidget01'}/>
                    <DWidget type='MSG' id={'dsb_uWidget02'}/>
                    <DWidget type='NEWS' id={'dsb_uWidget03'}/>
                    <DWidget type='SCHEDULE' id={'dsb_uWidget04'}/>
                    <DWidget type='Placeholder' id={'dsb_uWidget05'}/>
                    <DWidget type='Placeholder' id={'dsb_uWidget06'}/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;