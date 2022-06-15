import React, { useState } from "react";
import styled from "styled-components";

import { Talk } from "../@nehalist/gatsby-theme-nehalem/utils/models";
import { theme } from "../@nehalist/gatsby-theme-nehalem/styles/theme";
import { Presentation } from "../components/Presentation";
import { Video } from "../components/Video";
import { Writing } from "../components/Writing";

const TalkTitle = styled.h3`
  margin-bottom: 5px;
  ::before {
    content: "";
    border-radius: 50%;
    width: 14px;
    height: 14px;
    position: absolute;
    transform: translate(-30px, 8px);
  }
`;

const TalkMetadata = styled.div`
  font-size: 14px;
  font-style: italic;
  display: flex;
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    align-items: flex-start;
    flex-direction: column;
    line-height: 20px;

    span {
      margin-right: 0;
      margin-bottom: 15px;
      margin-top: 10px;
    }

    a:first-of-type {
      margin-left: 0;
    }
  }
`;

const StyledLink = styled.a`
  opacity: 0.7;
  height: 20px;
  margin-left: 10px;
  &:hover {
    opacity: 1;
  }
`;

const StyledTalkInfo = styled.div`
  margin-bottom: 25px;
`;

const StyledDate = styled.div`
  position: absolute;
  transform: translate(-85px, 0px);
  font-size: 14px;
`;

const StyledShowMore = styled.div`
  cursor: pointer;
  font-size: 0.75rem;
  margin-top: auto;
  margin-bottom: 0.5rem;
  visibility: visible;
  font-size: 14px;
  font-weight: 600;
`;

const StyledMore = styled.section`
  background: white;
  padding: 0 20px;
  max-width: 70ch;
  overflow: scroll;

  @media (max-width: ${theme.breakpoints.xs}) {
    transform: translate(-80px);
    width: calc(100% + 80px);
  }

  a {
    color: revert;
  }
`;

export const TalkInfo = ({ talk }: { talk: Talk }) => {
  const [openNotes, setOpenNotes] = useState(false);

  const {
    frontmatter: {
      duration,
      event,
      place,
      tags,
      recording,
      post,
      slides,
      title,
      type,
    },
    html,
  } = talk;

  const formattedDate = new Date(talk.frontmatter.date).toLocaleDateString(
    undefined,
    {
      month: "short",
      day: "numeric",
    }
  );
  return (
    <StyledTalkInfo>
      <StyledDate>{formattedDate}</StyledDate>
      <TalkTitle>{title}</TalkTitle>
      <TalkMetadata>
        <span style={{ marginRight: "15px" }}>
          {type} •{" "}
          {duration < 80 ? `${duration} min` : `${Math.ceil(duration / 60)} h`}{" "}
          {place ? "• " + place + " " : ""}
          • {tags.join(", ")}
        </span>
        <div style={{ display: "flex" }}>
          {slides && (
            <StyledLink href={slides} target="__blank">
              <Presentation />
            </StyledLink>
          )}
          {recording && (
            <StyledLink href={recording} target="__blank">
              <Video />
            </StyledLink>
          )}
          {post && (
            <StyledLink href={post} target="__blank">
              <Writing />
            </StyledLink>
          )}
        </div>
      </TalkMetadata>
      <span style={{ color: theme.colors.black07 }}>{event}</span>
      {html && (
        <StyledShowMore
          role="button"
          onClick={() => setOpenNotes((prev) => !prev)}
        >
          {openNotes ? "Hide more" : "Show more"}
        </StyledShowMore>
      )}
      {openNotes && <StyledMore dangerouslySetInnerHTML={{ __html: html }} />}
    </StyledTalkInfo>
  );
};
