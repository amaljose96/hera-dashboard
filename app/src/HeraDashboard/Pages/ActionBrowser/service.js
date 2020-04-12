import mockData from "../../Components/mockData";
import Axios from "axios";

export function getActions(searchParamters){
    return Axios.get("/hera-data-source",{params:searchParamters}).then((response)=>{
        return response.data.results;
    });
    return new Promise((resolve)=>{
        console.log("Getting data");
        setTimeout(()=>{
            console.log("Got data");
            resolve(mockData.results)
        },1000);
    })
}