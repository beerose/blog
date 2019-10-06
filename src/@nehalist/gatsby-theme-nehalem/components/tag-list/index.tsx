import React, { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Tag } from "@nehalist/gatsby-theme-nehalem/src/utils/models";
import slugify from "slugify";

import {
  StyledTag,
  StyledTagList,
  TagArchiveLink,
  TagArchiveLinkWrapper,
  TagContainer,
  TagListTitle,
  TagName,
} from "./style";

const TagList: FC = () => {
  const tagsQuery = useStaticQuery<{
    allTags: { nodes: Tag[] };
  }>(graphql`
    query GetTags {
      allTags {
        nodes {
          name
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
            <StyledTag key={index}>
              <Link to={`/tag/${slugify(tag.name, { lower: true })}`}>
                <TagName>{tag.name}</TagName>
              </Link>
            </StyledTag>
          );
        })}
      </StyledTagList>
      <TagArchiveLinkWrapper>
        <TagArchiveLink to={`/tags`}>See all tags</TagArchiveLink>
      </TagArchiveLinkWrapper>
    </TagContainer>
  );
};

export default TagList;
