import styled from "styled-components";
import Theme, { theme } from "../../styles/theme";
import { Link } from "gatsby";

export const TagContainer = styled.section`
  background-color: #fff;
  border-top: 1px #e5eff5 solid;
  border-bottom: 1px #e5eff5 solid;
  padding: 40px;
  margin-top: 75px;
  text-align: center;
`;

export const TagListTitle = styled.h2`
  margin: 0 0 40px;
`;

export const StyledTagList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: center;

  @media (max-width: ${Theme.breakpoints.sm}) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const StyledTag = styled.li<{ color: string }>`
  margin: 0 35px;
  transition: 0.5s all;

  border: 1px solid ${props => props.color};
  padding: 2px 8px;

  &:hover {
    box-shadow: 1px 1px ${props => props.color};
  }

  @media (max-width: ${Theme.breakpoints.sm}) {
    width: 50%;
    margin: 0 0 20px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TagIcon = styled.img`
  max-height: 55px;
`;

export const TagName = styled.span`
  color: ${theme.colors.smokyBlack};
  display: block;
`;

export const TagArchiveLinkWrapper = styled.div`
  display: block;
  margin-top: 20px;
`;

export const TagArchiveLink = styled(Link)`
  font-style: italic;
  font-size: 0.8em;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;
