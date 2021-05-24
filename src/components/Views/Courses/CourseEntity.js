// Dependencys //
import React, {useEffect, useState} from "react";

// Component //
function CourseEntity(props) {
    const style = { background: '#6A77A5' };
    const [ifSelected, setIfSelected] = useState(null)

    useEffect(() => {
        if (!props.data.selected) {
            setIfSelected({});
        } else {
            setIfSelected({background: '#ffffff', boxShadow: '0px 3px 6px rgba(0,0,0, 0.32)' });
        }
    }, [props.data.selected]);

    switch (props.data.mode) {
        case 'WARNING':
            style.background = '#ED962B';
            break;
        case 'ALERT':
            style.background = '#BC656B';
            break;
        default:
            break;
    }

    return(
        <div className={'crs_entityContainer'} style={ifSelected} onClick={() => props.onClick(props.data.uId)}>
            <div className={'crs_entityLabel'} style={style}/>
            <span className={'crs_entityName'}>{props.data.name}</span>
        </div>
    );
}

export default CourseEntity;