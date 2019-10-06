import React, { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Tag } from "@nehalist/gatsby-theme-nehalem/src/utils/models";
import slugify from "slugify";
import styled from "styled-components";

import { theme } from "../../styles/theme";

import {
  StyledTag,
  StyledTagList,
  TagArchiveLink,
  TagArchiveLinkWrapper,
  TagContainer,
  TagListTitle,
  TagName,
} from "./style";

const TagListItem = styled(StyledTag)`
  background: ${theme.colors.snow};
  padding: 2px 8px;
  border-radius: 4px;

  &:hover {
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);
  }
`;

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
            <TagListItem key={index}>
              <Link to={`/tag/${slugify(tag.name, { lower: true })}`}>
                <TagName>{tag.name}</TagName>
              </Link>
            </TagListItem>
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
