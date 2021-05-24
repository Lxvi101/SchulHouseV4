// Dependencies //
import React from "react";
import {selectColor} from "../../../api/methods";
import ImgRepo from "../../../img";

const SideLabel = (props) => {
    return(
        <div className={"crs_cnt_sLbl"} style={{backgroundColor: props.bg}}/>
    );
}

// Component //
const CourseTask = (props) => {

    return(
        <div className={"crs_cnt_bg"}>
            <SideLabel bg={'#' + selectColor(props.task.mode)}/>
            <span className={"crs_cnt_label"}>{props.task.name}</span>
            <ImgRepo.SUBMITTASK className={"crs_cnt_iSubmt"}/>
            <ImgRepo.CROSSSMALL className={"crs_cnt_iDecl"}/>
        </div>
    );
}

const CourseNews = (props) => {
    return(
        <div className={"crs_cnt_bg"}>
            <SideLabel bg={'#' + selectColor(props.news.mode)}/>
            <span className={"crs_cnt_label"}>{props.news.name}</span>
            <ImgRepo.CROSSSMALL className={"crs_cnt_iCentrd"}/>
        </div>
    );
}

const CourseFile = (props) => {

    return(
        <div className={"crs_cnt_bg"}>
            <SideLabel bg={'#' + selectColor("blue")}/>
            <span className={"crs_cnt_label"}>{props.sFile.name}</span>
            <ImgRepo.CLOUDICON className={"crs_cnt_iCentrd"}/>
        </div>
    );
}

export {CourseTask, CourseNews, CourseFile}