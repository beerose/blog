import React, { FunctionComponent, ReactNode } from "react";
import GlobalStyle from "@nehalist/gatsby-theme-nehalem/src/styles/global-style";
import { graphql, useStaticQuery } from "gatsby";
import Header from "./header";
import { SiteMetadata } from "../utils/models";
import Navigation from "./navigation";
import Footer from "./footer";

const pathnameToActivePage = {
  "/": "Home",
  "/about": "About me",
  "/speaking": "Speaking",
};

interface LayoutProps {
  children: ReactNode;
  bigHeader?: boolean;
  pathname?: string;
}

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  bigHeader = true,
  pathname,
}) => {
  const activePage = pathnameToActivePage[pathname];

  const data = useStaticQuery<SiteMetadata>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          topics
          menu {
            name
            path
          }
          footerMenu {
            name
            path
          }
          search
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      {bigHeader ? (
        <Header
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          topics={data.site.siteMetadata.topics}
          menu={data.site.siteMetadata.menu}
          search={data.site.siteMetadata.search}
          activePage={activePage}
        />
      ) : (
        <Navigation
          activePage={activePage}
          //title={data.site.siteMetadata.title}
          menu={data.site.siteMetadata.menu}
          showSearch={data.site.siteMetadata.search}
          dark={true}
        />
      )}
      <main>{children}</main>
      <Footer
        menu={data.site.siteMetadata.footerMenu}
        owner={data.site.siteMetadata.title}
      />
    </>
  );
};

export default Layout;
