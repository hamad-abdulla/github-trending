import React from "react";
import { Header, SubNav, ButtonTableList } from "@primer/components";
import { NavLink } from "react-router-dom";

const GithubTableHeader = () => {
  return (
    <Header>
      <Header.Item>
        <SubNav aria-label="Main">
          <SubNav.Links>
            <SubNav.Link to="/" as={NavLink} exact>
              Repositories
            </SubNav.Link>
            <SubNav.Link to="/developers" as={NavLink}>
              Developers
            </SubNav.Link>
          </SubNav.Links>
        </SubNav>
      </Header.Item>
      <Header.Item className="hide-md hide-sm" full></Header.Item>
      <Header.Item className="hide-md hide-sm">
        <ButtonTableList>Spoken Language: Any </ButtonTableList>
      </Header.Item>
      <Header.Item className="hide-md hide-sm">
        <ButtonTableList>Language: Any </ButtonTableList>
      </Header.Item>
      <Header.Item className="hide-md hide-sm">
        <ButtonTableList>Date range: Today </ButtonTableList>
      </Header.Item>
    </Header>
  );
};

export default GithubTableHeader;
