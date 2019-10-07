import styled from "styled-components";
import theme from "../../styles/theme";
import Typed from "react-typed";

export const StyledHeader = styled.header`
  display: flex;
  background: ${theme.colors.primary};
  flex-direction: column;
  height: 400px;

  @media (max-width: ${theme.breakpoints.sm}) {
    height: 30vh;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  @media (max-width: ${theme.breakpoints.sm}) {
    margin-top: -10px;
    font-size: 0.75em;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  display: block;
  font-size: ${theme.fontSizes[3]}px;
  text-shadow: 0 5px 18px rgba(0, 0, 0, 0.07);

  color: ${theme.colors.black09};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 10vmin;
  }
`;

export const Description = styled.h2`
  margin: 0;
  opacity: 0.85;
`;

export const StyledTopics = styled(Typed)`
  border-bottom: 3px #000 solid;
`;
