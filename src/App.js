// Dependencys //
import React, {useContext, useEffect} from "react";

// JSX Components //
import SideNavContainer from "./components/Foundation/SideNavContainer";
import LoggedInExeption from "./components/LoggedInExeption";
import ViewLoader from "./components/Viewloader";
import PageHeader from "./components/Foundation/PageHeader";

// CSS Styles //
import './App.css';
import './components/styles/Alignment.css'
import  './components/styles/Animations.css'
import './components/styles/Style-Normal.css'

import './UniversalScreenSupport.css'
import {CookieContext, UserContext} from "./context/ContextStore";

// Component //
function App() {
    const [usrToken, setUsrToken] = useContext(UserContext);
    const Cookie = useContext(CookieContext);

    useEffect(() => {
        if (usrToken != null) {
            Cookie.setLogIn(usrToken).serializeCookie();
        } else {
            if(document.cookie) {
                setUsrToken(Cookie.deserializeString(document.cookie).logIn);
            }
        }
    }, [usrToken]); //Logged in check

    return(
        <div id='PageGrid'>
            <div id='PageBG'/>

            <SideNavContainer/>

            <ViewLoader/>

            <PageHeader/>

            {!usrToken ? <LoggedInExeption /> : ''}
        </div>
    );
}

export default App;