//  Dependency //
import React, {useEffect, useState} from "react";
import {CourseFile, CourseNews, CourseTask} from "./CoursesData";

// Component //
function CourseContentLayout(props) {
    let [anim, setAnim] = useState({});

    props.course.update();

    useEffect(() => {
        setAnim({animation: "fadeIn .25s", animationFillMode: "forwards"});
        return () => {
            setAnim({animation: "fadeOut .25s", animationFillMode: "forwards"});
        }
    }, [props.course.selected]);

    return(
        <div id={'crs_cCB'} style={anim}>
            <div className={'crs_cWdgB'}>
                <div id={'crs_cTasks'} className={'crs_cWdg'}>
                    <div className={'crs_cWdgLbl'} style={{backgroundColor: '#484f53'}}/>
                    { props.course.tasks ?
                        props.course.tasks.map((task) => (
                           <CourseTask task={task} key={task.uId}/>
                        )) : <div className={"crs_cnt_notasks"}>Ziemlich ruhig hier</div>
                    }
                </div>
            </div>

            <div className={'crs_cWdgB'}>
                <div id={'crs_cNews'} className={'crs_cWdg'}>
                    <div className={'crs_cWdgLbl'} style={{backgroundColor: '#008670'}}/>

                    { props.course.news ?
                        props.course.news.map((news) => (
                            <CourseNews news={news} key={news.uId}/>
                        )) : <div className={"crs_cnt_notasks"}>Ziemlich ruhig hier</div>
                    }
                </div>
            </div>

            <div className={'crs_cWdgB'}>
                <div id={'crs_cKa'} className={'crs_cWdg'}>
                    <div className={'crs_cWdgLbl'} style={{backgroundColor: '#51859E'}}/>

                    { props.course.files ?
                        props.course.files.map((file) => (
                            <CourseFile sFile={file} key={file.uId}/>
                        )) : <div className={"crs_cnt_notasks"}>Nichts zu entdecken hier?</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default CourseContentLayout;