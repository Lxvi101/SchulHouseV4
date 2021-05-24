// Dependencys //
import React from "react";
import ImgRepo from "../../../img";

// Component //
function SettingsCategoryContent() {

    return(
        <div className={'sett_catContent'}>

            <div className={'sett_ProfilePicCOntainer'}>
                <ImgRepo.PROFILEPLACEHOLDER2 className={'sett_ProfilePic'}/>
                <div className={'sett_editProfilePic'}>
                    <span className={'sett_editProfilePicLabel'}>Bearbeiten</span>
                </div>
            </div>

            <span className={'sett_welcomeHeader'}>Hallo, Levi!</span> {/* CHANGE TO DYNAMIC */}

            <div className={'sett_contentBtnContainer'}>
                <SettContentBtn type={'PRIVACY'}/>
                <SettContentBtn type={'SECURITY'}/>
                <SettContentBtn type={'PROFILE'}/>
                <SettContentBtn type={'APP'}/>
            </div>
        </div>
    );
}

function SettContentBtn(props) {
    let type = 'Error';
    let desc = 'Error';

    switch(props.type) {
        case 'PRIVACY':
            type = 'Datenschutz';
            desc = 'General privacy information surrounding your personal data';
            break;
        case 'SECURITY':
            type = 'Sicherheit';
            desc = 'Securing your account by changing the password / email';
            break;
        case 'PROFILE':
            type = 'Profil';
            desc = 'Public available information such as your age and name';
            break;
        case 'APP':
            type = 'Anwendung';
            desc = 'View & edit configurations about the application';
            break;
        default:
            break;
    }

    return(
        <div className={'sett_contentBtnWrapper'}>
            <div className={'sett_contentBtn'}>
                <span>{type}</span>
            </div>

            <span className={'sett_contentBtnDesc'}>{desc}</span>
        </div>
    );
}

export default SettingsCategoryContent;