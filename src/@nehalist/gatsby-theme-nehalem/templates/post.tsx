import React, { createRef, FunctionComponent, useState } from "react";
import Layout from "@nehalist/gatsby-theme-nehalem/src/components/layout";
import { Post, Tag } from "@nehalist/gatsby-theme-nehalem/src/utils/models";
import { Container } from "@nehalist/gatsby-theme-nehalem/src/components/common";
import styled from "styled-components";
import Toc from "@nehalist/gatsby-theme-nehalem/src/components/toc";
import Img from "gatsby-image";
import ReadingProgress from "@nehalist/gatsby-theme-nehalem/src/components/reading-progress";
import { theme } from "../styles/theme";
import { Link, useStaticQuery, graphql } from "gatsby";
import slugify from "slugify";
import Bio from "@nehalist/gatsby-theme-nehalem/src/components/bio";
import Comments from "@nehalist/gatsby-theme-nehalem/src/components/comments";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import { FaAlignJustify, FaTimes } from "react-icons/fa";
import readTimeEstimate from "read-time-estimate";
import { SiteMetadata } from "../utils/models";
import { Facebook, Twitter } from "react-sharingbuttons";
import "react-sharingbuttons/dist/main.css";
import { TimeToRead } from "../../../components/TimeToRead";

interface PostTemplateProps {
  location: Location;
  pageContext: {
    post: Post;
    primaryTag: Tag;
  };
}

const PostContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 0 !important;
`;

const LeftSidebar = styled.div<{ show?: boolean }>`
  min-width: 255px;
  max-width: 225px;
  transition: opacity 0.5s;

  @media (max-width: ${theme.breakpoints.xl}) {
    position: fixed;
    display: ${props => (props.show ? "unset" : "none")};
    z-index: 1000;
    background-color: #fff;
    width: 100% !important;
    max-width: 100%;
    padding: 0 20px;
    margin-top: -5px;
    height: calc(100vh - 70px);
  }
`;

const PostContent = styled.div`
  margin-top: -5px;
  border-right: 1px #e5eff5 solid;
  border-left: 1px #e5eff5 solid;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.03), 0 3px 46px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 1035px;
  max-width: 100%;

  li > a,
  p > a {
    color: ${theme.layout.linkColor};
    border-bottom: 2px ${theme.layout.linkColor} solid;
  }

  pre {
    margin: 30px 0;
  }

  blockquote {
    border-left: 4px ${theme.layout.primaryColor} solid;
    background-color: ${theme.layout.backgroundColor};
    margin: 30px 0;
    padding: 5px 20px;
    border-radius: 0.3em;
  }

  h3::before,
  h4::before,
  h5::before,
  h6::before {
    display: block;
    content: " ";
    height: 90px;
    margin-top: -90px;
    visibility: hidden;
  }

  h2 {
    border-top: 1px solid #ececec;
    margin-top: 44px;
    padding-top: 40px;
    line-height: 1.2;
  }

  code[class*="language-text"] {
    padding: 5px;
  }

  p > img {
    max-width: 100%;
    border-radius: 0.3em;
    margin: 30px 0;
  }

  hr {
    border-top: 1px solid #ececec;
    border-bottom: 0;
    margin-top: 44px;
    margin-bottom: 40px;
  }

  .gatsby-resp-image-link {
    margin: 30px 0;
    max-width: 100%;

    .gatsby-resp-image-image {
      border-radius: 0.3em;
    }
  }
`;

const TocWrapper = styled.div`
  position: sticky;
  top: 70px;
  padding: 40px 30px 40px 0;
`;

const PostHeader = styled.header`
  padding: 30px 40px;
  padding-bottom: 25px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px;
  }
`;

const FeaturedImage = styled(Img)`
  border-radius: 0;
  @media (max-width: ${theme.breakpoints.xl}) {
    margin-left: -1px;
    margin-right: -1px;
  }
`;

const StyledPost = styled.section<{ hasImage: boolean }>`
  padding: 40px;
  padding-top: ${props => (props.hasImage ? "20px" : 0)};

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px;
    padding-top: ${props => (props.hasImage ? "10px" : 0)};
  }

  #flex-row__orms {
    display: flex;
    align-items: center;

    span {
      width: 100%;
      transform: scale3D(1, 0.9, 1);
    }

    span:nth-child(2) {
      transform: scale3D(0.75, 0.7, 1);
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      flex-direction: column;
    }
  }
`;

const PostMeta = styled.section`
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
  font-size: 0.9em;
  margin-bottom: 12px;
`;

const PostTitle = styled.h1`
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
`;

const PostFooter = styled.footer`
  background-color: #fafafa;
  font-size: 0.8em;
  color: #666;
  padding: 40px;
  line-height: 1em;

  p {
    margin: 5px 0;
  }
`;

const FooterTagLink = styled(Link)`
  color: #000 !important;
  text-decoration: none;
  border-bottom: 0 !important;
`;

const PostAddition = styled.section`
  background-color: #fff;
  border-top: 1px #e5eff5 solid;
  border-bottom: 1px #e5eff5 solid;
  z-index: 700;
  position: relative;
  padding: 40px;
`;

const PostAdditionContent = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const BioWrapper = styled.div`
  width: 50%;
  margin: auto;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const ToggleTocButton = styled.button`
  display: flex;
  position: fixed;
  justify-content: center;
  right: 20px;
  bottom: 20px;
  border-radius: 100%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.03), 0 3px 46px rgba(0, 0, 0, 0.1);
  border: 0;
  z-index: 5000;
  width: 50px;
  height: 50px;
  background-color: ${theme.colors.secondary};
  color: #fff;
  outline: none;

  @media (min-width: ${theme.breakpoints.xl}) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  /* color: ${theme.colors.smokyBlack}; */
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const ShareButtons = styled.div`
  display: flex;
  padding: 10px 40px;
  a {
    margin: 0;
  }
  a:first-child {
    margin-right: 10px;
  }
`;

const PostTemplate: FunctionComponent<PostTemplateProps> = ({ location, pageContext }) => {
  const [showToc, setShowToc] = useState<boolean>(false);
  const post = pageContext.post;
  const readingProgressRef = createRef<HTMLElement>();
  const primaryTag = pageContext.primaryTag;
  const toggleToc = () => setShowToc(!showToc);

  const metadata = useStaticQuery<SiteMetadata>(graphql`
    query MetadataQuery2 {
      site {
        siteMetadata {
          siteUrl
          twitterHandle
        }
      }
    }
  `);

  const twitterHandle = metadata.site.siteMetadata.twitterHandle;

  return (
    <Layout bigHeader={false}>
      <SEO
        location={location}
        title={post.frontmatter.title}
        publishedAt={post.frontmatter.created}
        updatedAt={post.frontmatter.updated}
        tags={post.frontmatter.tags}
        description={post.frontmatter.excerpt}
        image={post.frontmatter.featuredImage ? post.frontmatter.featuredImage.childImageSharp.sizes.src : null}
      />
      <ReadingProgress target={readingProgressRef} color={primaryTag ? primaryTag.color : undefined} />
      <PostContainer>
        {post.headings.find(h => h.depth > 1) && (
          <>
            <LeftSidebar show={showToc}>
              <TocWrapper>
                <Toc onClick={toggleToc} />
              </TocWrapper>
            </LeftSidebar>
            <ToggleTocButton role="button" aria-label="Toggle table of contents" onClick={toggleToc}>
              {showToc ? <FaTimes /> : <FaAlignJustify />}
            </ToggleTocButton>
          </>
        )}
        <PostContent>
          <article className={`post`} ref={readingProgressRef}>
            <PostHeader>
              <PostMeta>
                <span>
                  <span>
                    {post.frontmatter.tags.length > 0 &&
                      post.frontmatter.tags.map((tag, i) => (
                        <StyledLink
                          key={i}
                          to={`/tag/${slugify(tag, {
                            lower: true,
                          })}`}>
                          {tag}
                          {post.frontmatter.tags.length > i + 1 && <>, </>}
                        </StyledLink>
                      ))}
                  </span>
                </span>
                <time dateTime={post.frontmatter.created}>{post.frontmatter.createdPretty}</time>
              </PostMeta>
              <PostTitle>{post.frontmatter.title}</PostTitle>
              <TimeToRead fontsize="0.9em" duration={readTimeEstimate(post.html).duration} />
            </PostHeader>
            {post.frontmatter.featuredImage && <FeaturedImage sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />}
            <StyledPost hasImage={post.frontmatter.featuredImage} dangerouslySetInnerHTML={{ __html: post.html }} className="post" />
            <ShareButtons>
              <Twitter
                text="Tweet"
                shareText={`${post.frontmatter.title} by ${twitterHandle} ${metadata.site.siteMetadata.siteUrl}${
                  post.frontmatter.path
                } ${post.frontmatter.tags.map(tag => `#${tag}`).join(" ")}
                `}
              />
              <Facebook text="Share" url={metadata.site.siteMetadata.siteUrl + post.frontmatter.path} />
            </ShareButtons>
            <PostFooter>
              <p>
                Published under&nbsp;
                {post.frontmatter.tags.map((tag, index) => (
                  <span key={index}>
                    <FooterTagLink to={`/tag/${slugify(tag, { lower: true })}`}>{tag}</FooterTagLink>
                    {post.frontmatter.tags.length > index + 1 && <>, </>}
                  </span>
                ))}
                &nbsp;on <time dateTime={post.frontmatter.created}>{post.frontmatter.createdPretty}</time>.
              </p>
              {post.frontmatter.updated !== post.frontmatter.created && (
                <p>
                  Last updated on <time dateTime={post.frontmatter.updated}>{post.frontmatter.updatedPretty}</time>.
                </p>
              )}
            </PostFooter>
          </article>
        </PostContent>
      </PostContainer>
      <PostAddition>
        <PostAdditionContent>
          <BioWrapper>
            <Bio textAlign={`center`} showName={true} />
          </BioWrapper>
        </PostAdditionContent>
      </PostAddition>
      <Comments />
    </Layout>
  );
};

export default PostTemplate;
