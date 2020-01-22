import React, { FunctionComponent } from "react";
import Layout from "../components/layout";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import Img from "gatsby-image";
import styled from "styled-components";
import theme from "../styles/theme";

interface SpeakingPageProps {
  location: Location;
}

const SpeakingPage: FunctionComponent<SpeakingPageProps> = props => {
  console.log({ props });
  return (
    <Layout bigHeader={false} pathname={location.pathname}>
      <SEO location={location} title="Speaking" type="WebSite" />
    </Layout>
  );
};

export default SpeakingPage;
