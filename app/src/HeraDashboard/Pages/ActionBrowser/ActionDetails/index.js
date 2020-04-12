import React,{useState,useEffect} from 'react';
import { ActionDetailsContainer,ActionTraceId,ActionLogs } from './styles';
import ActionSummary from './ActionSummary';
import { getActions } from '../service';
import LogsList from './LogsList';

function ActionDetails({selectedAction}){
    const [action, setAction] = useState({});
    useEffect(() => {
        getActions({traceId:selectedAction.traceId}).then(recievedActions=>{
            console.log(Object.values(recievedActions)[0])
            setAction(Object.values(recievedActions)[0])
        });
    }, [selectedAction]);
    if(!selectedAction || !action){
        return <ActionDetailsContainer><ActionTraceId>Choose an action</ActionTraceId></ActionDetailsContainer>
    }
    return <ActionDetailsContainer>
        <ActionTraceId>{action.traceId}</ActionTraceId>
        <ActionSummary action={action}/>
        <LogsList logs={Object.values(action.logs)}/>
    </ActionDetailsContainer>;
}

export default ActionDetails