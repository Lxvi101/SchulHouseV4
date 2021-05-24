// Dependencys //
import React from "react";
import ImgRepo from "../../img";
import { Link } from "react-router-dom";

// Component //
class SideNav extends React.Component {
    render() {

        // Switch Icon Types
        let CLink;
        let Img;

        switch (this.props.type) {
            case 'dashboard':
                CLink = '/dashboard'
                Img = ImgRepo.DASHBOARD
                break;
            case 'courses':
                CLink = '/courses'
                Img = ImgRepo.COURSES
                break;
            case 'timetable':
                CLink = '/timetable'
                Img = ImgRepo.TIMETABLE
                break;
            case 'news':
                CLink = '/news'
                Img = ImgRepo.NEWS
                break;
            case 'settings':
                Img = ImgRepo.SETTINGS
                return(
                    <Link to={'/settings'}>
                        <div className='SideNav' id='SettingsNav'>
                            <Img className='SideIcon'/>
                        </div>
                    </Link>
                );
            default:
                Img = null;
                break;
        }

        // Render Out
        return(
            <Link to={CLink}>
                <div className='SideNav'>
                    <Img className='SideIcon'/>
                </div>
            </Link>
        );
    }
}

export default SideNav;