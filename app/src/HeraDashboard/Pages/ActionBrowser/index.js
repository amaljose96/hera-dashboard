import React, { useState, useEffect } from "react";
import { ActionBrowserContainer,ActionBrowserBody } from "./styles";
import FilterBar from "./FilterBar";
import { getActions } from "./service";
import ActionsList from "./ActionsList";
import ActionDetails from "./ActionDetails";

function ActionBrowser() {
  const [searchParameters, setSearchParameters] = useState({
    resultsLimit:10,
    start:new Date().setHours(new Date().getHours()-1),
    end:new Date().getTime()
  });
  const [isLiveMode, setLiveMode] = useState(false);
  const [actions, setActions] = useState({});
  const [selectedAction, setSelectedAction] = useState(false);
  const [liveFetcher,setLiveFetcher] = useState(false);
  useEffect(()=>{
    if(isLiveMode){
      if(liveFetcher){
        clearInterval(liveFetcher);
        setLiveFetcher(false);
      }
      setLiveFetcher(setInterval(()=>{
        setSearchParameters({
          ...searchParameters,
          start:new Date().setHours(new Date().getHours()-1),
          end:new Date().getTime()
        })
      },1000));
    }
    else{
      clearInterval(liveFetcher);
      setLiveFetcher(false);
    }
  },[isLiveMode,searchParameters])
  useEffect(() => {
    getActions(searchParameters).then(recievedActions=>{
      setActions(recievedActions);
    })
  }, [searchParameters]);

  return (
    <ActionBrowserContainer>
      <FilterBar
        searchParameters={searchParameters}
        setSearchParamters={setSearchParameters}
        isLiveMode={isLiveMode}
        setLiveMode={setLiveMode}
      />
      <ActionBrowserBody>
        <ActionsList actions={actions} selectedAction={selectedAction} setSelectedAction={setSelectedAction}/>
        <ActionDetails selectedAction={selectedAction}/>
      </ActionBrowserBody>
    </ActionBrowserContainer>
  );
}
export default ActionBrowser;
