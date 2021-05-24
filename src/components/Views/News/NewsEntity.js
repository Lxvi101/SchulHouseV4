// Dependencys //
import React from "react";
import ImgRepo from "../../../img";

// Component //

function NewsEntity(props) {

    return(
        <div className={'nEntity_borderBox'}
             style={(props.data.selected ? { background: '#ffffff', boxShadow: '0px 3px 6px rgba(0,0,0, 0.32)' } : {/* background: '#eeeeee', boxShadow: '0px 3px 6px rgba(0,0,0, 0.08)' */})}
             onClick={props.onClick.bind(null, props.data.uId)}
        >
            <div className={'nEntity_label'}
                 style={(props.data.uReadC === 0 ? { backgroundColor:'#81898C' } : {})}
            />

            <span className={'nEntity_title'}
                  style={(props.data.uReadC === 0 ? { color: '#81898C' } : {})}
            > {props.data.name} </span>

            <ImgRepo.NOTIFICATION className={'nEntity_notifIcon'}
                                  style={(props.data.uReadC === 0 ? { fill: '#81898C' } : {})}
            />

            <div className={'nEntity_notifCounter'}
                 style={(props.data.uReadC === 0 ? { backgroundColor: '#81898C' } : {})}
            >
                <span className={'nEntity_notifCount'}>
                    {props.data.uReadC > 0 && props.data.uReadC }
                </span>
            </div>
        </div>
    );
}

export default NewsEntity;