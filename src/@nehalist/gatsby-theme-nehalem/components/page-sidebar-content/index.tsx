import React, { FunctionComponent } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Card } from "../card";
import styled from "styled-components";
import Theme from "../../styles/theme";
import readTimeEstimate from "read-time-estimate";

const LatestPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  width: 310px;

  @media (max-width: ${Theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const PageSidebarContent: FunctionComponent = () => {
  const latestPosts = useStaticQuery(graphql`
    query {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.md$/" } }
        sort: { fields: frontmatter___created, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              tags
              created
              createdPretty: created(formatString: "DD MMMM, YYYY")
              excerpt
              featuredImage {
                childImageSharp {
                  fixed(width: 315, height: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const posts = latestPosts.posts.edges.map(node => node.node);

  return (
    <>
      <h3>Latest posts</h3>
      <LatestPosts>
        {posts.map((post, index) => (
          <Card
            timeToRead={readTimeEstimate(post.html)}
            title={post.frontmatter.title}
            featuredImage={post.frontmatter.featuredImage.childImageSharp}
            path={post.frontmatter.path}
            key={index}
            compact={true}
            meta={{
              time: post.frontmatter.created,
              timePretty: post.frontmatter.createdPretty,
              tags:
                post.frontmatter.tags.length > 0 ? post.frontmatter.tags : null,
            }}
          />
        ))}
      </LatestPosts>
    </>
  );
};

export default PageSidebarContent;
