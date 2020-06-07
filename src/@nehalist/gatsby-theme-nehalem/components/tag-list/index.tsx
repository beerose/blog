import React, { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Tag } from "@nehalist/gatsby-theme-nehalem/src/utils/models";
import slugify from "slugify";

import { StyledTagList, TagContainer, TagListTitle, TagName } from "./style";
import { StyledTag } from "../../../../components/StyledTag";

const TagList: FC = () => {
  const tagsQuery = useStaticQuery<{
    allTags: { nodes: Tag[] };
  }>(graphql`
    query GetTags {
      allTags {
        nodes {
          name
          color
        }
      }
    }
  `);
  const tags = tagsQuery.allTags.nodes;

  return (
    <TagContainer>
      <TagListTitle>Tags</TagListTitle>
      <StyledTagList>
        {tags.map((tag, index) => {
          return (
            <Link to={`/tag/${slugify(tag.name, { lower: true })}`}>
              <StyledTag color={tag.color} key={index}>
                <TagName>{tag.name}</TagName>
              </StyledTag>
            </Link>
          );
        })}
      </StyledTagList>
    </TagContainer>
  );
};

export default TagList;
