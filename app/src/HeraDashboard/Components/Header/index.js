import React from "react";
import { HeaderContainer, LogoContainer, TabsContainer, Tab } from "./styles";
function Header({ currentTab, setCurrentTab }) {
  return (
    <HeaderContainer>
      <LogoContainer>HERA</LogoContainer>
      <TabsContainer>
        <Tab
          active={currentTab === "actionBrowser"}
          onClick={() => {
            setCurrentTab("actionBrowser");
          }}
        >
          Action Browser
        </Tab>
        <Tab
          active={currentTab === "performanceAnalysis"}
          onClick={() => {
            setCurrentTab("performanceAnalysis");
          }}
        >
          Performance Analysis
        </Tab>
        <Tab
          active={currentTab === "apiHealth"}
          onClick={() => {
            setCurrentTab("apiHealth");
          }}
        >
          API Health
        </Tab>
      </TabsContainer>
    </HeaderContainer>
  );
}
export default Header;
