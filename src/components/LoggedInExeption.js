// Dependencys //
import { Link } from "react-router-dom";
import ImgRepo from "../img";
import React, {useContext} from "react";
import {UserContext} from "../context/ContextStore";

// Component //
function LoggedInExeption() {
    const [, setUsrToken] = useContext(UserContext);

    function logIn() {
        setUsrToken("123")
    } //TODO: Send and receive log in request

    return (
        <div id='LogInContainer'>
            <div id='LogInBG'/>

            <div id='LogInExBG'>
                <ImgRepo.LOCK id='LogInIcon'/>

                <span id='LogInTxt'>You are not logged in.</span>

                <nav id='LogInNav'>
                    <span className='LogInNavtem' onClick={logIn}>Log in</span>
                    <Link to={'/register'} className='LogInNavtem'>Register</Link>
                </nav>
            </div>
        </div>
    );
}

export default LoggedInExeption;