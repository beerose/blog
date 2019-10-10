import React, { CSSProperties, FunctionComponent, ReactNode } from "react";
import {
  CardContent,
  CardMeta,
  CardTitle,
  FeaturedImage,
  StyledArticle,
  StyledCard,
} from "./style";
import styled from "styled-components";
import theme from "../../styles/theme";
import { TimeToRead } from "../../../../components";

export interface CardProps {
  title?: string;
  timeToRead?: {
    humanizedDuration?: string;
    duration: number;
  };
  path: string;
  featuredImage?: any;
  content?: string;
  meta?: {
    time: string;
    timePretty: string;
    tags: string[] | null;
  };
  halfImage?: boolean;
  compact?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}

export const Card: FunctionComponent<CardProps> = ({
  title,
  meta,
  path,
  featuredImage,
  content,
  halfImage = false,
  compact = false,
  style,
  children,
  timeToRead,
}) => {
  return (
    <StyledArticle style={style}>
      <StyledCard to={path}>
        {/* TODO: Oh boy... */}
        {featuredImage && featuredImage.fixed && (
          <FeaturedImage fixed={featuredImage.fixed} halfImage={halfImage} />
        )}
        {featuredImage && featuredImage.sizes && (
          <FeaturedImage sizes={featuredImage.sizes} halfImage={halfImage} />
        )}
        <CardContent compact={compact}>
          {children}
          <header>
            {meta && (
              <CardMeta>
                {meta.tags && (
                  <span>
                    {meta.tags.map((tag, idx) => (
                      <span key={idx}>
                        {tag}
                        {meta.tags.length > idx + 1 && <>, </>}
                      </span>
                    ))}
                  </span>
                )}
                {meta.time && (
                  <time dateTime={meta.time}>{meta.timePretty}</time>
                )}
              </CardMeta>
            )}
            {title && <CardTitle>{title}</CardTitle>}
            {timeToRead && <TimeToRead duration={timeToRead.duration} />}
          </header>
          {content && <p dangerouslySetInnerHTML={{ __html: content }} />}
        </CardContent>
      </StyledCard>
    </StyledArticle>
  );
};
