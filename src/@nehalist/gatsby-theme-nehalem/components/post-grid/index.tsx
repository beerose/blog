import React, { FunctionComponent } from "react";
import { Post } from "../../utils/models";
import { Grid } from "@nehalist/gatsby-theme-nehalem/src/components/common";
import { Card } from "../card";
import { isNumber } from "util";

interface PostGridProps {
  posts: Post[];
}

const PostGrid: FunctionComponent<PostGridProps> = ({ posts }) => {
  return (
    <Grid>
      {posts.map((post, index) => (
        <Card
          title={post.frontmatter.title}
          path={post.frontmatter.path}
          featuredImage={
            post.frontmatter.featuredImage
              ? post.frontmatter.featuredImage.childImageSharp
              : null
          }
          content={post.frontmatter.excerpt}
          key={index}
          meta={{
            time: post.frontmatter.created,
            timePretty: post.frontmatter.createdPretty,
            tags:
              post.frontmatter.tags.length > 0 ? post.frontmatter.tags : null,
          }}
        />
      ))}
    </Grid>
  );
};

export default PostGrid;
