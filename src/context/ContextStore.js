// Dependencys //
import React, {createContext, useState} from "react";
import SettingCategory from "../datastructure/Entities/SettingCategory";
import Course from "../datastructure/Entities/Course";
import NewsChannel from "../datastructure/Entities/NewsChannel";
import {CookieSRL} from "../api/CookieSRL";

// Contexts //
const UserContext = createContext(null);
const CoursesContext = createContext(null);
const NewsContext = createContext(null);
const SettingsContext = createContext(null);
const CookieContext = createContext(null);

// Initial States //
const coursesInit = [
    new Course("Mathematik", "#0201", "ALERT"),
    new Course("Französisch", "#0202", "WARNING"),
    new Course("Deutsch", "#0203", "NONE"),
    new Course("Chemie", "#0204", "NONE")
]
const newsInit = [
    new NewsChannel("Kultus-ministerium-BW", '#0014'),
    new NewsChannel("Gymnasium-Rutesheim", '#0013'),
    new NewsChannel("Klasse-10d", '#0012')
]
const settingsInit = [
    new SettingCategory("Konto", "ACCOUNT", "00"),
    new SettingCategory("Allgemein", "GENERAL", "01"),
    new SettingCategory("Gestaltung", "DESIGN", "02"),
    new SettingCategory("Mitteilungen", "NOTIFICATION", "03")
]
const cookie = new CookieSRL();


// Component //
function ContextStore({children}) { // Children ensures other components being wrapped inside
    // Set / Fetch Value // TODO: Initially fetch values from API
    const [usrState, setUsrState] = useState(null);
    const [news, setNews] = useState(newsInit);
    const [courses, setCourses] = useState(coursesInit);
    const [settings, setSettings] = useState(settingsInit);

    // Reducer functions // (like update)

    return(
        <UserContext.Provider value={[usrState, setUsrState]}>
            <CoursesContext.Provider value={[courses, setCourses]}>
                <NewsContext.Provider value={[news, setNews]}>
                    <SettingsContext.Provider value={[settings, setSettings]}>
                        <CookieContext.Provider value={cookie}>
                            {children}
                        </CookieContext.Provider>
                    </SettingsContext.Provider>
                </NewsContext.Provider>
            </CoursesContext.Provider>
        </UserContext.Provider>
    );
}

export {UserContext, CoursesContext, NewsContext, SettingsContext, CookieContext};
export default ContextStore;