import styled from "styled-components";
import { Link } from "gatsby";
import { theme } from "../../styles/theme";
import Img from "gatsby-image";
import { CardProps } from "@nehalist/gatsby-theme-nehalem/src/components/card";

export const StyledCard = styled(Link)`
  display: block;
  background-color: #fff;
  transition: 0.5s all;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 0px;

  &:hover {
    box-shadow: 1.5px 1.5px rgb(0, 0, 0, 0.1);
  }
`;

export const StyledArticle = styled.article`
  display: inline-block;
  width: 100%;

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-area: unset !important;
  }
`;

export const FeaturedImage = styled(Img)<Pick<CardProps, "halfImage">>`
  background-position: center;
  background-size: cover;
  max-width: 100%;

  ${props =>
    props.halfImage
      ? `
    width: 50%;
    float: left;
    margin-right: 30px;
    height: 250px;

    @media (max-width: ${theme.breakpoints.sm}) {
      width: 100%;
      float: none;
      height: 150px;
    }
  `
      : `
    height: 150px;
    max-height: 150px;
    width: 100%;
    border-top-right-radius: 3px;
  `};
`;

export const CardContent = styled.section<{ compact: boolean }>`
  padding: ${props => (props.compact ? "10px" : "25px")};

  p {
    margin: 0;
  }

  h2 {
    font-size: 1.5em;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    p {
      font-size: 0.9em;
    }
  }
`;

export const CardMeta = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.8em;
  opacity: 0.8;
  line-height: 1em;
`;

export const CardTitle = styled.h2`
  margin: 0;
  padding: 10px 0;
`;
