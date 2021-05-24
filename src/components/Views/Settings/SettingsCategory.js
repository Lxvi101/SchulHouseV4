// Dependencys //
import React, {useEffect, useState} from "react";
import ImgRepo from "../../../img";

// Component //
function SettingsCategory(props) {
    const [varStyle, setVarStyle] = useState({});
    const [ifStyle, setIfStyle] = useState({});

    useEffect(() => {
        setVarStyle({});
        switch (props.class.type.toUpperCase()) {
            case "ACCOUNT":
                setVarStyle({height: 75 + "px"});
                break;
            case "GENERAL":
                setVarStyle({marginTop: 30 + 'px'});
                break;
            default: break
        }
    }, []); //Initial Setup

    useEffect(() => {
        if (props.class.selected) {
            setIfStyle({ backgroundColor: '#484F53', color: 'white', fill: 'white' });
        } else {
            setIfStyle({});
        }
    }, [props.class.selected]); // Update selection

    return (
        <div className={'settC_background'} onClick={props.onClick.bind(null, props.class.uId)}
             style={{...varStyle, ...ifStyle}}>

            <props.class.displayType className={'settC_icon'}/>
            <span className={'settC_Font'}>{props.class.name}</span>
            <ImgRepo.SIDESLIDER className={'settC_sideSlider'}/>
        </div>
    );
}

export default SettingsCategory;