import styled from "styled-components";
import { theme } from "../@nehalist/gatsby-theme-nehalem/styles/theme";
import React from "react";
const StyledTimeToRead = styled.span<{ fontsize?: string }>`
  font-size: ${props => props.fontsize || "0.8em"};
  color: ${theme.colors.secondaryDarker};
`;

type Props = {
  fontsize?: string;
  duration: number;
};
export const TimeToRead: React.FunctionComponent<Props> = ({
  fontsize,
  duration,
}) => (
  <StyledTimeToRead fontsize={fontsize}>
    {Math.ceil(duration)} min read
  </StyledTimeToRead>
);
