import React from 'react';
import { LogsListContainer,Title } from './styles';
import LogLine from './LogLine';

function LogsList({logs}){
    return <LogsListContainer>
        <Title>Logs</Title>
        {
            logs.map(log=>{
                return <LogLine log={log}/>
            })
        }
    </LogsListContainer>
}

export default LogsList;