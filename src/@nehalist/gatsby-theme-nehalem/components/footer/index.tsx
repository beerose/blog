import React from "react";
import { MenuItem } from "@nehalist/gatsby-theme-nehalem/src/utils/models";
import { Container } from "@nehalist/gatsby-theme-nehalem/src/components/common";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const StyledFooter = styled.footer`
  max-width: 100%;
  padding: 10px 0;
  z-index: 700;
  position: relative;
  font-size: 0.9em;
  margin-top: 50px;
`;

export const StyledNav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    margin-right: 25px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const LinkStyle = css`
  color: #000;
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

export const FooterMenuItem = styled.a`
  ${LinkStyle}
`;

export const FooterMenuLink = styled(Link)`
  ${LinkStyle}
`;

interface FooterProps {
  menu: MenuItem[];
  owner: string;
}

const Footer: React.FC<FooterProps> = ({ menu }) => (
  <StyledFooter style={{ margin: 0, padding: "3em" }}>
    <StyledNav>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            {/* Links to RSS and Sitemap are handled
                  differently (for now) since they're technically external links */}
            {["/rss.xml", "/sitemap.xml"].includes(item.path) ? (
              <FooterMenuItem href={item.path} rel="noopener noreferrer">
                {item.name}
              </FooterMenuItem>
            ) : (
              <FooterMenuLink to={item.path}>{item.name}</FooterMenuLink>
            )}
          </li>
        ))}
      </ul>
    </StyledNav>
  </StyledFooter>
);

export default Footer;
