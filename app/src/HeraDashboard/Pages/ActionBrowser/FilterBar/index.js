import React, { useState } from "react";
import {
  FilterBarContainer,
  CondensedFitlerText,
  FilterSwitch,
  FilterForm,
  FormElement,
  FormLabel,
  FormValue,
  LiveModeContainer,
  LiveCircle,
} from "./styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { printDateTime } from "../../../utils";


function getSearchParameterString(searchParameters,isLive) {
    let string="Showing "+(isLive?"live ":"")+"data from "+printDateTime(searchParameters.start)+" to "+printDateTime(searchParameters.end);
    if(searchParameters.urlKeyword){
        string=string+" with url keyword "+searchParameters.urlKeyword
    }
    if(searchParameters.traceId){
        string=string+" (traceId : "+searchParameters.traceId+" )";
    }
  return string+".";
}

function FilterBar({
  searchParameters,
  setSearchParamters,
  isLiveMode,
  setLiveMode,
}) {
  const [isCollapsed, setCollapsedState] = useState(true);
  if (isCollapsed) {
    return (
      <FilterBarContainer>
          <CondensedFitlerText>
        {getSearchParameterString(searchParameters,isLiveMode)}
        </CondensedFitlerText>
        <FilterSwitch
          onClick={() => {
            setCollapsedState(false);
          }}
        >
          Show Filters
        </FilterSwitch>
      </FilterBarContainer>
    );
  } else {
    return (
      <FilterBarContainer>
        <FilterForm>
          {isLiveMode ? (
            <LiveModeContainer>
              <LiveCircle />
              Live
            </LiveModeContainer>
          ) : (
            <FilterSwitch onClick={() => setLiveMode(true)}>
              Go Live
            </FilterSwitch>
          )}
          <FormElement>
            <FormLabel>Start</FormLabel>
            <FormValue>
              <DatePicker
                selected={searchParameters.start}
                onChange={(date) => {
                  setLiveMode(false);
                  setSearchParamters({ ...searchParameters, start: new Date(date).getTime() });
                }}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={10}
                minDate={new Date().setDate(new Date().getDate() - 5)}
                maxDate={searchParameters.end}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm:ss aa"
              />
            </FormValue>
          </FormElement>
          <FormElement>
            <FormLabel>End</FormLabel>
            <FormValue>
              <DatePicker
                selected={searchParameters.end}
                onChange={(date) => {
                  setLiveMode(false);
                  setSearchParamters({ ...searchParameters, end: new Date(date).getTime() });
                }}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                minDate={searchParameters.start}
                maxDate={new Date()}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm:ss aa"
              />
            </FormValue>
          </FormElement>
          <FormElement>
            <FormLabel>Url Keyword</FormLabel>
            <FormValue>
              <input
                value={searchParameters.urlKeyword}
                onChange={(e) => {
                  setSearchParamters({
                    ...searchParameters,
                    urlKeyword: e.target.value,
                  });
                }}
              />
              <FilterSwitch
                onClick={() => {
                  setSearchParamters({
                    ...searchParameters,
                    urlKeyword: "",
                  });
                }}
              >
                Clear
              </FilterSwitch>
            </FormValue>
          </FormElement>

          <FormElement>
            <FormLabel>Trace Id</FormLabel>
            <FormValue>
              <input
                value={searchParameters.traceId}
                onChange={(e) => {
                  setSearchParamters({
                    ...searchParameters,
                    traceId: e.target.value,
                  });
                }}
              />
              <FilterSwitch
                onClick={() => {
                  setSearchParamters({
                    ...searchParameters,
                    traceId: "",
                  });
                }}
              >
                Clear
              </FilterSwitch>
            </FormValue>
          </FormElement>

          <FormElement>
            <FormLabel>Count</FormLabel>
            <FormValue>
              <select onChange={(e)=>{
                setSearchParamters({
                  ...searchParameters,
                  resultsLimit:e.target.value
                })
              }}>
                <option>10</option>
                <option>50</option>
                <option>100</option>
              </select>
            </FormValue>
          </FormElement>
        </FilterForm>
        <FilterSwitch
          onClick={() => {
            setCollapsedState(true);
          }}
        >
          Hide Filters
        </FilterSwitch>
      </FilterBarContainer>
    );
  }
}
export default FilterBar;
