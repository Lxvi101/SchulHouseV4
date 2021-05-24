// Dependencys //
import React from "react";
import ImgRepo from "../../img";

// Component //
function Dropdown(props) {
    return(
        <div id='AccDropdownBG' active={props.active.toString()}>
            <div className={'drpIconContainer'} id={'drbIconC0'}>
                <ImgRepo.INBOX id={'drp_InboxIcon'}/>
                <div className={'drp_split'} id={'drp_split0'}/>
                <div className={'drp_label'} id={'drp_label0'}>Inbox</div>
            </div>

            <div className={'drpIconContainer'}>
                <ImgRepo.ACCSETT id={'drp_AccIcon'}/>
                <div className={'drp_split'}/>
                <div className={'drp_label'}>Profil</div>
            </div>

            <div className={'drpIconContainer'} id={'drbIconC1'}>
                <ImgRepo.DISPLAYSETT id={'drp_DisplayIcon'}/>
                <div className={'drp_split'} id={'drp_split1'}/>
                <div className={'drp_label'} id={'drp_label1'}>Display</div>
            </div>
        </div>
    );
}

export default Dropdown;