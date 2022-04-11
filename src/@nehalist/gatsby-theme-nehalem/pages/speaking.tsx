import React, { FunctionComponent } from "react";
import Layout from "../components/layout";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import styled from "styled-components";
import { theme } from "../styles/theme";

import { Talk } from "../utils/models";
import { TalkInfo } from "../../../components/Talk";

const Speaking = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  padding: 20px;
  padding-left: 200px;
  padding-bottom: 60px;
  flex-direction: column;
  position: relative;

  .anchor.before {
    display: none;
  }

  @media (max-width: ${theme.breakpoints.xl}) {
    padding-left: 120px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding-left: 90px;
  }
`;

const StyledDots = styled.div`
  position: absolute;
  height: 100%;
  transform: translate(-4px, 0);

  ::before {
    content: "";
    position: absolute;
    height: 56px;
    width: 10px;
    background: ${theme.colors.snow};
    transform: translate(-2px);
  }

  ::after {
    content: "";
    position: absolute;
    height: 100px;
    width: 20px;
    background: ${theme.colors.snow};
    transform: translate(-20px);
    bottom: 0;
  }
`;

const Dots = () => (
  <StyledDots>
    <svg stroke={theme.colors.secondary} width="10px" height="100%">
      <line
        strokeWidth="2px"
        strokeLinecap="round"
        strokeDasharray="0, 6"
        x1="1px"
        y1="1px"
        x2="1px"
        y2="100%"
      />
    </svg>
  </StyledDots>
);

const StyledYear = styled.h1`
  transform: translate(-65px, 0px);
  background-color: ${theme.colors.snow};
  padding-bottom: 15px;
  padding-top: 15px;
  margin-bottom: 0;
  font-size: 40px;
  background: ${theme.colors.snow};
  color: ${theme.colors.black02};
`;

interface AboutPageProps {
  location: Location;
  pageContext: {
    talks: Talk[];
  };
}

const SpeakingPage: FunctionComponent<AboutPageProps> = ({
  location,
  pageContext: { talks },
}) => {
  const talksPerYear = talks.reduce(
    (acc, val) => {
      const year = new Date(val.frontmatter.date).getFullYear();
      return {
        ...acc,
        [year]: [...acc[year], val],
      };
    },
    { "2020": [], "2019": [], "2021": [], "2022": [] }
  );

  return (
    <Layout bigHeader={false} pathname={location.pathname}>
      <SEO location={location} title="Speaking" type="WebSite" />

      <Speaking>
        <Dots />
        {Object.keys(talksPerYear)
          .sort((a, b) => (a < b ? 1 : -1))
          .map((year) => (
            <>
              <StyledYear>{year}</StyledYear>
              <section style={{ paddingLeft: "20px" }}>
                {talksPerYear[year].map((talk) => (
                  <TalkInfo talk={talk} />
                ))}
              </section>
            </>
          ))}
      </Speaking>
    </Layout>
  );
};

export default SpeakingPage;
