import styled from 'styled-components';
import { getColor } from '../../../../../colors';

export const LogLineContainer = styled.div`
    border:solid 1px ${getColor()};
    margin:10px 0px;
`;
export const LogHeader = styled.div`
    background-color:${getColor()}bb;
    color:#fff;
    display:flex;
    padding:10px;
    justify-content:space-between;
`;
export const Time = styled.div``;
export const Type = styled.div``;
export const LogBody=styled.div`
    padding:15px;
`;