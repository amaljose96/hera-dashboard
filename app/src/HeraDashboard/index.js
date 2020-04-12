import React,{useState} from 'react';
import { AppContainer } from './styles';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header';
import Body from './Components/Body';

function HeraDashboard(){
    const [currentTab, setCurrentTab] = useState("actionBrowser");
    return <AppContainer>
        <Router>
        <Header setCurrentTab={setCurrentTab} currentTab={currentTab}/>
        <Body currentTab={currentTab}/>
        </Router>
    </AppContainer>;
}
export default HeraDashboard