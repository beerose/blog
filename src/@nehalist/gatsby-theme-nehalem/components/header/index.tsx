import React, { FunctionComponent } from "react";
import Navigation from "../navigation";
import { StyledHeader, Title, TitleWrapper } from "./style";
import { MenuItem } from "../../utils/models";

interface HeaderProps {
  title: string;
  description: string;
  topics: string[];
  menu: MenuItem[];
  search: boolean;
  activePage?: string;
}

const Header: FunctionComponent<HeaderProps> = ({ title, menu, search = true, activePage }) => {
  return (
    <StyledHeader>
      <Navigation menu={menu} showSearch={search} activePage={activePage} />
      <TitleWrapper>
        <Title>{title}</Title>
      </TitleWrapper>
    </StyledHeader>
  );
};

export default Header;
