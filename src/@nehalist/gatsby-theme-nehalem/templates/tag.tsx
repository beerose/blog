import React, { FunctionComponent } from "react";
import Layout from "@nehalist/gatsby-theme-nehalem/src/components/layout";
import { graphql } from "gatsby";
import { Post, Tag } from "@nehalist/gatsby-theme-nehalem/src/utils/models";
import Subheader from "@nehalist/gatsby-theme-nehalem/src/components/subheader";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import { theme } from "../styles/theme";
import PostGrid from "@nehalist/gatsby-theme-nehalem/src/components/post-grid";

interface TagTemplateProps {
  data: {
    tag: Tag;
    posts: {
      edges: Array<{ node: Post }>;
    };
  };
  location: Location;
}

const TagTemplate: FunctionComponent<TagTemplateProps> = ({
  data,
  location,
}) => {
  let tag = data.tag;
  const posts = data.posts.edges.map(node => node.node);

  if (!tag && posts.length > 0) {
    tag = {
      name: posts[0].frontmatter.tags[0],
      color: theme.layout.primaryColor,
      icon: null,
      featured: false,
    };
  }

  return (
    <Layout bigHeader={false}>
      <SEO title={tag.name} location={location} type={`Series`} />
      <Subheader
        title={tag.name}
        subtitle={`${posts.length} ${posts.length === 1 ? "post" : "posts"}`}
        backgroundColor={tag.color}
      />
      <PostGrid posts={posts} />
    </Layout>
  );
};

export default TagTemplate;

export const query = graphql`
  query($tag: String!) {
    tag: tags(name: { eq: $tag }) {
      name
      color
    }
    posts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(posts)/.*\\\\.md$/" }
        frontmatter: { tags: { eq: $tag } }
      }
      sort: { fields: frontmatter___created, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            tags
            excerpt
            created
            createdPretty: created(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 800, quality: 100) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
