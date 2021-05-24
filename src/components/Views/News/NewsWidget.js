// Dependency //
import React, {useEffect, useState} from "react";

// Component //
function NewsWidget(props) {
    const [nlVarStyle, setNlVarStyle] = useState([{},{}])
    const [dspStyle, setDspStyle] = useState({});
    const [txtStyle, setTxtStyle] = useState([{}, {}]);

    useEffect(() => {
        if (props.read) {
            setNlVarStyle([{color: '#ffffff'}, {color: '#eeeeee'}]);
        } else {
            setNlVarStyle([{color: '#000000'}, {color: '#81898c'}]);
        }

        if (props.filtered) {
            setTxtStyle([{display: 'none'}, {display: 'none'}]);
            setDspStyle({visibility: 'hidden', transform: 'scale(0, 1)', width: 0});
        } else {
            setDspStyle({});
            setTimeout(() => {
                if (props.filtered === false) {
                    console.log(props.filtered)
                    setTxtStyle([{}, {}]);
                }
            }, 500);
        }
        return () => { setTxtStyle([{display: 'none'}, {display: 'none'}]) }
    }, [props.filtered, props.read])

    return(
        <div className={'news_wBorder'} onClick={props.onClick.bind(null, props.data)} style={dspStyle}>
            <div className={'news_wBG'} style={props.read ? {backgroundColor: '#008670', boxShadow: 0 + "px " + 3 + "px " + 6 + "px  rgba("+0+","+0+","+0+", "+0.32+")"} : {backgroundColor: 'white',  boxShadow: 0 + "px " + 3 + "px " + 6 + "px rgba("+0+","+0+","+0+", "+0.08+")"}}>
                <img src={props.ImgSrc} alt={""} className={'news_wImg'}/>

                <span className={'news_wL1'} style={{...txtStyle[0],...nlVarStyle[0]}}>{props.data.header}</span>
                <span className={'news_wL2'} style={{...txtStyle[0],...nlVarStyle[1]}}>{props.data.subHeader}</span>
            </div>
        </div>
    );
}

export default NewsWidget;