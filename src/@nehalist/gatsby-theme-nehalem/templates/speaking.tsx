import React, { FunctionComponent } from "react";
import Layout from "../components/layout";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import { SpeakingPost } from "../utils/models";

interface SpeakingPageProps {
  location: Location;
  pathContext: {
    posts: SpeakingPost[];
  };
}

const SpeakingPage: FunctionComponent<SpeakingPageProps> = ({
  location,
  pathContext: { posts },
}) => {
  return (
    <Layout bigHeader={false} pathname={location.pathname}>
      <SEO location={location} title="Speaking" type="WebSite" />
    </Layout>
  );
};

export default SpeakingPage;
