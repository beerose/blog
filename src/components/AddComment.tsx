import React from "react";
import { useState } from "react";
import { Comment } from "use-comments";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    padding: 10px;
    margin: 5px 0 10px 0;
    border: 1px solid black;

    &:focus {
      outline-style: solid;
      outline-color: black;
    }
  }

  label {
    font-weight: 600;
  }
`;

const StyledButton = styled.button`
  width: 130px;

  margin: 15px 10px 10px 0;
  transition: 0.3s all;

  border: 1.5px solid black;
  padding: 10px 8px;

  background: transparent;

  &:hover {
    box-shadow: 1.5px 1.5px black;
  }

  outline: none;
`;

export interface AddCommentProps {
  onSubmit: (comment: Pick<Comment, "author" | "content">) => void;
}
export const AddComment = ({ onSubmit }: AddCommentProps) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  return (
    <StyledForm
      onSubmit={(e) => {
        console.log({ e });
        e.preventDefault();
        onSubmit({ content: comment, author: username });
        setUsername("");
        setComment("");
      }}
    >
      <label htmlFor="username">Username</label>
      <input
        name="username"
        id="username"
        placeholder="Jon Doe"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="comment">Comment</label>
      <textarea
        name="comment"
        id="comment"
        rows={2}
        placeholder="Tell me what you think 😊"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <StyledButton>Add comment</StyledButton>
    </StyledForm>
  );
};
