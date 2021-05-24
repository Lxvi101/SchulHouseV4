// Dependencys //
import React, {useContext, useEffect, useState} from "react";
import NewsEntity from "./NewsEntity";
import NewsWidget from "./NewsWidget";
import ImgRepo from "../../../img";
import Selector from "../../../api/selector/Selector";
import {NewsContext} from "../../../context/ContextStore";
import News from "../../../datastructure/Entities/News";

/* Fetched Images */
import news_1 from '../../../repo/news_1.jpg'
import news_2 from '../../../repo/news_2.jpg'
import news_3 from '../../../repo/news_3.jpg'
import {useHistory, useLocation} from "react-router-dom";

// Component //
function NewsComponent() {
    const [newsChannel] = useContext(NewsContext);
    const [getListedNewsChannel, setListedNewsChannel] = useState(newsChannel); // getListed / setListed
    const [getAllNews, setAllNews] = useState([]);
    const [getSelected, setSelected] = useState(null);
    const history = useHistory();
    const location = useLocation();

    // Updating / Fetching News //
    useEffect(() => {
        getListedNewsChannel.forEach(newsCh => {
            if(newsCh.selected || location.hash === newsCh.uId) {
                select(newsCh);
            }
        })

        newsChannel[0].update([new News("Schulschluss wegen Covid-19", "Vorgezogene Ferien ab Mittwoch", news_1, '000', false)]);
        newsChannel[1].update([new News("Neue Fernunterrichtssoftware", "Anmeldung bis 14.2.2021", news_2, '000', true)]);
        newsChannel[2].update([new News("Schülerdisco nur mit Regelungen", "Diskussion um aktuelle Veranstaltungen", news_3, '000', true)]);
        setListedNewsChannel(newsChannel);
        setAllNews(fetchRawNewsArray());
    }, []); // TODO: !Hardcoded News! -> Fetching News function

    // Selecting //
    const selector = new Selector(select, deselect);

    function select(news) {
        news.selected = true;
        history.push("/news?filter=" + news.uId);
        setSelected(news);
    }
    function deselect(news) {
        news.selected = false;
        history.push("/news");
        setSelected(null);
    }

    function read(news) {
        news.alrRead = true;

        news.parent.updateUReadC();
    } // TODO: Refresh News

    function fetchRawNewsArray() {
        let tmp = [];
        getListedNewsChannel.forEach(newsCat => {
                newsCat.news.forEach(news => {
                    tmp.push(news);
                });
            });
        return tmp;
    } // Returns all news in one Array

    return(
        <div id='news_grid'>
            <div id={'news_label'}/>

            <div id='news_selector'>
                <div className='news_lShadow'/>

                <div id={'news_mappedEntities'}>
                    {
                        getListedNewsChannel.map((newsCh, i) => (
                            <NewsEntity data={newsCh} onClick={id => { selector.updateArray(id, getListedNewsChannel, setListedNewsChannel) }} key={i}/>
                        ))
                    }
                </div>
            </div>

            <div id='news_content'>
                <div className='news_lShadow'/>

                <div id={'news_contentArea'}>
                    {
                        getAllNews.map((news, i) => {
                            let filtered = false;

                            if(getSelected) {
                                if(getSelected.name !== news.orgName) {
                                    filtered = true;
                                }
                            }

                            return(<NewsWidget ImgSrc={news.prevSrc} key={i} read={!news.alrRead} filtered={filtered} onClick={read} data={news}/>);
                        })
                    }

                    {
                        getAllNews.length <= 3 ?
                            <div id={'news_nfm'}><ImgRepo.THREEDOTS id={'news_nfmIco'}/><span id={'news_nfmTxt'}>Keine weiteren Neuigkeiten</span>
                            </div> : ''
                    }
                </div>

            </div>
        </div>
    );
}

export default NewsComponent;