import React, { FunctionComponent } from "react";
import { Nav, NavContainer, NavLink, NavMenu, NavMenuItem, NavWrapper, SearchContainer } from "./style";
import { MenuItem } from "@nehalist/gatsby-theme-nehalem/src/utils/models";
import { Search } from "../search";

interface NavigationProps {
  // title: string;
  menu: MenuItem[];
  showSearch: boolean;
  dark?: boolean;
  activePage?: string;
}

const Navigation: FunctionComponent<NavigationProps> = ({
  // title,
  menu,
  dark = false,
  showSearch = true,
  activePage,
}) => (
  <NavContainer dark={dark}>
    <Nav>
      <NavWrapper>
        <NavMenu mobile={true}>
          {menu
            // TO DO: fix me
            .filter(item => item.name !== "Example")
            .map((item, index) => (
              <NavMenuItem key={index}>
                <NavLink darkmode={dark ? 1 : 0} active={activePage === item.name ? 1 : 0} to={item.path} key={index}>
                  {item.name}
                </NavLink>
              </NavMenuItem>
            ))}
        </NavMenu>
        {/*<SearchContainer> {showSearch && !dark && (
            <NavMenu>
              <Search />
            </NavMenu>
          )} </SearchContainer>*/}
      </NavWrapper>
    </Nav>
  </NavContainer>
);

export default Navigation;
