import styled from "styled-components";

export const StyledTag = styled.li<{ color: string }>`
  margin: 0 10px 10px 0;
  transition: 0.3s all;

  border: 1.5px solid ${props => props.color};
  padding: 4px 10px;

  &:hover {
    box-shadow: 1.5px 1.5px ${props => props.color};
  }
`;
