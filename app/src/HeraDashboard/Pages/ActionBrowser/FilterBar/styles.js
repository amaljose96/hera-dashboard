import styled from 'styled-components';
import { getColor } from '../../../colors';

export const FilterBarContainer=styled.div`
    display:flex;
    border-bottom:solid 1px ${getColor()};
    justify-content:space-between;
    align-items:center;
`;
export const CondensedFitlerText=styled.div`
    margin-left:10px;
    font-size:14px;
    padding:5px;
`;
export const FilterSwitch=styled.div`
    margin:0px 10px;
    color:${getColor()}aa;
    font-size:12px;
    transition:all 0.2s;
    font-weight:bold;
    :hover{
        cursor:pointer;
        color:${getColor()};
    }
`;
export const FilterForm=styled.div`
    display:flex;
    align-items:center;
    height:100%;
`;

export const FormElement=styled.div`
    padding:0px 10px;
    display:flex;
    align-items:center;
    height:100%;
`;
export const FormLabel=styled.div`
    font-size:12px;
    margin-right:15px;
`;
export const FormValue=styled.div`
display:flex;
align-items:center;
    input{
        width:170px;
        font-size:14px;
        border:none;
        outline:none;
        padding:10px;
        :hover{
            cursor:pointer;
        }
        background-color:${getColor()}22;
    }
`;
export const LiveModeContainer = styled.div`
    display:flex;
    align-items:center;
    color:#dd0000;
    heightL100%;
    padding:0px 20px;
`;
export const LiveCircle = styled.div`
    height:10px;
    width:10px;
    background-color:#dd0000;
    margin-right:5px;
    border-radius:50%;
`;