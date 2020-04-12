import styled from "styled-components";
import { getColor } from "../../colors";

export const HeaderContainer = styled.div`
  display: flex;
  background-image: linear-gradient(${getColor()}dd, ${getColor()});
`;
export const LogoContainer = styled.div`
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
`;
export const TabsContainer = styled.div`
  margin: 7px 10px 0px 10px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;
export const Tab = styled.div`
  background-color: ${(props) => (props.active ? "#fff" : "#fffa")};
  padding: 7px 13px;
  margin: 0px 2px;
  font-size:12px;
`;
