// Dependencys //
import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
import {UserContext} from "../../context/ContextStore";

// Component //
function Register() {
    const [, setUsrToken] = useContext(UserContext);
    const history = useHistory();

    function login() {
        history.push("/");
        setUsrToken("Logged-In");
    }

    return(
        <div id={"reg"}>
            <div id={"reg_header"}>
                <span id={"reg_hLabel"}>ANMELDEN</span>
            </div>

            <div id={"reg_sidebar"}>
                <span id={"reg_sidebar_label"}>Probleme mit dem Login?</span>
                <a id={"reg_sidebar_signUpLink"} href={"signup"}>Neu hier</a>
                <a id={"reg_sidebar_lostLink"} href={"lost"}>Passwort verloren</a>
            </div>

            <div id={"reg_content"}>
                <input type={"text"} placeholder={"example@school.edu"} id={"reg_content_iptMail"} />
                <input type={"password"} placeholder={"••••••"} id={"reg_content_iptPwd"}/>
                <div id={"reg_content_submit"} onClick={login}>
                    <span id={"reg_content_submit_label"}>Login</span>
                </div>
            </div>
        </div>
    );
}

export default Register;