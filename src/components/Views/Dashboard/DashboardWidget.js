// Dependencys //
import React, {useEffect, useState} from "react";
import {selectColor} from "../../../api/methods";

// Component //
function DWidget(props) {
    const [style, setStyle] = useState({ gridArea: 'Unkn' });
    const [color, setColor] = useState({ backgroundColor: '#ED962B'});
    const [listedContent, setListedContent] = useState([]);

    useEffect(() => {
        switch(props.type) {
            case 'MSG':
                setListedContent([<IWidget color={'blue'}/>]);
                setStyle({gridArea: 'Msg'});
                setColor({backgroundColor: '#51859E'});
                break;
            case 'WORK':
                setListedContent([<IWidget color={'red'}/>, <IWidget color={'orange'}/>, <IWidget color={'grey'}/>]);
                setStyle({gridArea: 'Work'});
                setColor({backgroundColor: '#484f53'});
                break;
            case 'NEWS':
                setStyle({gridArea: 'News'});
                setColor({backgroundColor: '#008670'});
                break;
            case 'SCHEDULE':
                setStyle({gridArea: 'Sched'});
                setColor({backgroundColor: '#EDBC2C'});
                break;
            case 'Placeholder':
                setStyle({gridArea: ''})
                setColor({backgroundColor: '#6A77A5'});
                break;
            default:
                break;
        }
    }, [props.type]);

    return(
        <div className='dsb_widget' style={style} id={props.id}>
            <div id='dsb_widgetHead' style={color}/>
            {listedContent.map((value) => ( value ))}
        </div>
    );
}

function IWidget({color, type, mode, text}) {
    let col = selectColor(color)
    return(
        <div className={"dsb_iWidget"}>
            <div className={"dsb_iWidgetSLb"} style={{backgroundColor: "#" + col}}/>
        </div>
    );
}

export default DWidget;