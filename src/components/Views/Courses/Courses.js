// Dependencys //
import React, {useContext, useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import CourseEntity from "./CourseEntity";
import ImgRepo from "../../../img";
import CourseContentLayout from "./CourseContentLayout";
import Selector from "../../../api/selector/Selector";
import {CoursesContext} from "../../../context/ContextStore";

// Component //
function Courses() {
    const [courses] = useContext(CoursesContext);
    const [getListedCourses, setListedCourses] = useState(courses);
    const [getSelected, setSelected] = useState(null);
    const history = useHistory();
    const location = useLocation();

    // Update Courses //
    useEffect(() => {
        getListedCourses.forEach(course => {
            if (course.selected || location.hash === course.uId) {
                select(course);
            }
        })
    }, []); // Reselect course (on leave)

    // Selector //
    const selector = new Selector(select, deselect);

    function select(course) {
        course.selected = true
        setSelected(course);
        history.push('/courses?courseId=' + course.uId);
    }
    function deselect(course) {
        course.selected = false;
        setSelected(null);
        history.push("/courses");
    }

    // Return //
    return(
        <div id='crs_grid'>
            <div id='crs_selectorBG'>
                <div id='crs_selectorLabel'/>
                <div id='crs_selector'>
                    {getListedCourses.map(course => (
                        <CourseEntity data={course} onClick={uId => { selector.updateArray(uId, getListedCourses, setListedCourses) }} key={course.uId}/>
                    ))}
                </div>
            </div>

            <div id={'crs_cNotch'}>
                <ImgRepo.SELECTOR2 id={'crs_cNotchS'}/>
                <ImgRepo.DASHBVIEW id={'crs_cNotchDB'}/>
            </div>

            <div id='crs_content'>
                <div id={'crs_cHB'}>
                    <div id={'crs_cHeader'}>
                        <ImgRepo.MEMBERS id={'crs_cHMembers'}/>
                        <div id={'crs_cHSettGearB'}>
                            <ImgRepo.SETTINGSGEAR id={'crs_cHSettGear'}/>
                        </div>
                    </div>
                </div>

                {getSelected ? <CourseContentLayout course={getSelected}/> :
                    <div id={'crs_noCourseSel'}>
                        <ImgRepo.BIN id={'crs_noCourseSelIco'}/>
                        <div id={'crs_noCourseSelFont'}>
                            Nichts zu entdecken hier?
                        </div>
                    </div>
                }

            </div>
        </div>
    );
}

export default Courses;