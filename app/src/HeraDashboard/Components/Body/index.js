import React from 'react';
import { BodyContainer } from './styles';
import ActionBrowser from '../../Pages/ActionBrowser';
import APIHealth from '../../Pages/APIHealth';

function Body({currentTab}){
    return <BodyContainer>
        {
            currentTab==="actionBrowser" && <ActionBrowser/>
        }
        {
            currentTab==="apiHealth" && <APIHealth/>
        }
    </BodyContainer>
}

export default Body;