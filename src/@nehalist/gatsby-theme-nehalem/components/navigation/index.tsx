import React, { FunctionComponent } from "react";
import {
  Nav,
  NavContainer,
  NavLink,
  NavMenu,
  NavMenuItem,
  NavWrapper,
  SearchContainer,
} from "./style";
import { MenuItem } from "@nehalist/gatsby-theme-nehalem/src/utils/models";
import { Search } from "@nehalist/gatsby-theme-nehalem/src/components/search";

interface NavigationProps {
  // title: string;
  menu: MenuItem[];
  showSearch: boolean;
  dark?: boolean;
}

const Navigation: FunctionComponent<NavigationProps> = ({
  // title,
  menu,
  dark = false,
  showSearch = true,
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
                <NavLink darkMode={dark} to={item.path} key={index}>
                  {item.name}
                </NavLink>
              </NavMenuItem>
            ))}
        </NavMenu>
        <SearchContainer>
          {showSearch && (
            <NavMenu>
              <Search />
            </NavMenu>
          )}
        </SearchContainer>
      </NavWrapper>
    </Nav>
  </NavContainer>
);

export default Navigation;
