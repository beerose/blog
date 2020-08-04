import React from "react";
import { useComments, CommentStatus } from "use-comments";
import styled from "styled-components";
import { theme } from "../@nehalist/gatsby-theme-nehalem/styles/theme";

import { AddComment } from "./AddComment";

export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  if (Math.floor(seconds) === 0) {
    return "now";
  }
  return Math.floor(seconds) + " seconds ago";
};

export const formatStatus = (status: CommentStatus) => {
  switch (status) {
    case "sending":
      return "✉️";
    default:
      return "👌";
  }
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px 40px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 10px 20px;
  }
`;

const StyledComment = styled.article`
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.04);
  padding: 10px 14px;

  p {
    margin: 0;
  }

  div {
    font-weight: 500;
    time {
      font-weight: 200;
    }
  }
`;

export const Comments = ({ postId }: { postId: string }) => {
  const { comments, addComment, count, loading } = useComments(
    "https://aleksandra-codes-comments.herokuapp.com/v1/graphql",
    postId
  );

  return (
    <StyledSection>
      <AddComment onSubmit={addComment} />
      <p>{count === 1 ? "1 comment" : `${count} comments`}</p>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {comments.map(({ author, content, created_at, status }) => (
            <StyledComment key={created_at}>
              <div>
                {`${author} ・ `}
                <time dateTime={created_at}>{formatDate(created_at)}</time>
                {status && ` ・ ${formatStatus(status)}`}
              </div>
              <p>{content}</p>
            </StyledComment>
          ))}
        </div>
      )}
    </StyledSection>
  );
};
