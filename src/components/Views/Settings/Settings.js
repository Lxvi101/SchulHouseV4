// Dependencys //
import React, {useContext, useEffect, useState} from "react";
import SettingsCategory from "./SettingsCategory";
import {Route, useHistory, useLocation} from "react-router-dom";
import SettingsCategoryContent from "./SettingsCategoryContent";
import Selector from "../../../api/selector/Selector";
import {SettingsContext} from "../../../context/ContextStore";
import ImgRepo from "../../../img";

// Component //
function Settings() {
    const [getContextSettings] = useContext(SettingsContext);
    const [getCSettings, setCSettings] = useState(getContextSettings);
    const history = useHistory();
    const location = useLocation();

    // Updating //
    useEffect(() => {
        getCSettings.forEach(cSetting => {
            if(cSetting.selected || location.pathname.split("/")[2] === cSetting.type.toLowerCase()) {
                select(cSetting);
            }
        });
    }, []); // Update Selection

    // Selector //
    const selector = new Selector(select, deselect);

    function select(setting) {
        setting.selected = true;
        history.push('/settings/' + setting.type.toLowerCase());
    }
    function deselect(setting) {
        setting.selected = false;
        history.push("/settings");
    }

    // Return //
    return(
        <div id={'sett_grid'}>
            <div id={'sett_selectorBG'}>
                {/*<div id={'sett_selectorLabel'}/>*/}

                <div id={'sett_selector'}>
                    {getCSettings.map((settingsCategory, i) => (
                        <SettingsCategory class={settingsCategory} key={i} onClick={id => {selector.updateArray(id, getCSettings, setCSettings)}}/>
                    ))}
                </div>
            </div>

            <div id={'sett_content'}>
                <Route path={'/settings/account/'} component={SettingsCategoryContent}/>
                {location.pathname === "/settings" ? <NothingSelected/> : ""}
            </div>
        </div>
    );
}

function NothingSelected() {
    return(
        <div id={"sett_content_ns"}>
            <ImgRepo.NOSELECTION id={'sett_content_nsIco'}/>
            <span id={'sett_content_nsFnt'}>Keine Kategorie ausgewählt</span>
        </div>
    );
}

export default Settings;