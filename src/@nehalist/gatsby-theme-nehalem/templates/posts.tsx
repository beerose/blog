import React, { FunctionComponent } from "react";
import Layout from "@nehalist/gatsby-theme-nehalem/src/components/layout";
import {
  Container,
  Grid,
} from "@nehalist/gatsby-theme-nehalem/src/components/common";
import { Post } from "@nehalist/gatsby-theme-nehalem/src/utils/models";
import { Card } from "../components/card";
import styled from "styled-components";
import TagList from "../components/tag-list";
import { Link } from "gatsby";
import SidebarContent from "@nehalist/gatsby-theme-nehalem/src/components/sidebar-content";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import Theme, { theme } from "../styles/theme";
import readTimeEstimate from "read-time-estimate";

interface PostsPageProps {
  pathContext: {
    posts: Post[];
    postsPerPage: number;
  };
  location: Location;
}

const HomeContainer = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 0.25fr;
  grid-column-gap: 30px;

  @media (max-width: ${Theme.breakpoints.xl}) {
    grid-template-columns: 1fr;
  }
`;

const PostsContainer = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "latest latest" ". .";
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 30px;

  @media (max-width: ${Theme.breakpoints.sm}) {
    display: block;
    padding: 0;

    article {
      margin-bottom: 30px;
    }
  }
`;

const Sidebar = styled.aside`
  width: 315px;
  padding-top: 30px;

  @media (max-width: ${Theme.breakpoints.xl}) {
    margin: 30px auto;
    border-top: 2px #e5eff5 solid;
    padding: 20px;
    width: 100%;
  }
`;

const ArchiveLinkWrapper = styled.div`
  grid-column: 1 / -1;
  text-align: center;
`;

const ArchiveLink = styled(Link)`
  font-size: 16px;
  padding: 10px;
  transition: box-shadow 0.5s;
  border: 1.5px solid ${theme.colors.smokyBlack};

  &:hover {
    box-shadow: 1.5px 1.5px ${theme.colors.smokyBlack};
  }
`;

const PostsPage: FunctionComponent<PostsPageProps> = ({
  pathContext,
  location,
}) => {
  const posts = pathContext.posts.slice(0, 7);

  return (
    <Layout>
      <SEO location={location} type={`WebSite`} />
      <HomeContainer>
        <PostsContainer>
          {posts.map((post, index) => (
            <Card
              timeToRead={readTimeEstimate(post.html)}
              title={post.frontmatter.title}
              path={post.frontmatter.path}
              featuredImage={
                post.frontmatter.featuredImage
                  ? post.frontmatter.featuredImage.childImageSharp
                  : null
              }
              content={post.frontmatter.excerpt}
              key={index + post.frontmatter.title}
              meta={{
                time: post.frontmatter.created,
                timePretty: post.frontmatter.createdPretty,
                tags:
                  post.frontmatter.tags.length > 0
                    ? post.frontmatter.tags
                    : null,
              }}
              style={{ gridArea: index === 0 ? "latest" : undefined }}
              halfImage={index === 0}
            />
          ))}
          <ArchiveLinkWrapper>
            <ArchiveLink to={`/archive`}>More posts</ArchiveLink>
          </ArchiveLinkWrapper>
        </PostsContainer>
        <Sidebar>
          <SidebarContent />
        </Sidebar>
      </HomeContainer>
      <TagList />
    </Layout>
  );
};

export default PostsPage;
