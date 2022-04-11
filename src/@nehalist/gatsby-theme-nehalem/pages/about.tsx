import React, { FunctionComponent } from "react";
import Layout from "../components/layout";
import SEO from "@nehalist/gatsby-theme-nehalem/src/components/seo";
import { useStaticQuery, graphql } from "gatsby";
import { SiteMetadata } from "@nehalist/gatsby-theme-nehalem/src/utils/models";
import Img, { FixedObject } from "gatsby-image";
import styled from "styled-components";
import theme from "../styles/theme";

const skills = [
  { color: "#2E4057", items: ["MySQL", "PostgreSQL", "Ecto", "Redis"] },
  {
    color: "#729B58",
    items: ["Golang", "Elixir", "NodeJS", "Docker", "Kubernetes", "OCaml"],
  },
  { color: "#197559", items: ["React", "TypeScript", "CSS", "Redux", "RxJS"] },
];

const StyledImg = styled(Img)`
  border-radius: 50%;
`;

const AboutMe = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  padding: 20px;
  padding-left: 90px;
  padding-bottom: 60px;

  @media (max-width: ${theme.breakpoints.xl}) {
    padding-left: 21px;
  }
  align-items: center;
`;
const StyledTag = styled.span<{ color?: string }>`
  margin: 0 10px 10px 0;
  transition: 0.3s all;

  border: 1.5px solid ${(props) => props.color || theme.colors.secondaryDarker};
  padding: 4px 8px;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

interface AboutPageProps {
  location: Location;
}

const AboutPage: FunctionComponent<AboutPageProps> = ({ location }) => {
  const metadata = useStaticQuery<
    SiteMetadata & {
      file: { childImageSharp: { fixed: FixedObject } };
    }
  >(graphql`
    query AboutMeQuery {
      site {
        siteMetadata {
          author {
            name
            social {
              facebook
              twitter
              linkedin
              github
            }
          }
        }
      }
      file(relativePath: { eq: "assets/images/photo.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  // const author = metadata.site.siteMetadata.author;

  return (
    <Layout bigHeader={false} pathname={location.pathname}>
      <SEO location={location} title="About me" type="WebSite" />
      <AboutMe>
        {/* <StyledImg fixed={metadata.file.childImageSharp.fixed} alt="Avatar" /> */}
        <div style={{ paddingLeft: "15px" }}>
          <h1>Hi! I'm Aleksandra Sikora 👋</h1>
          <ul style={{ listStyleType: "none", padding: 0, marginBottom: 0 }}>
            <li>🏡 I live in Wrocław, Poland. </li>
            <li>🛫 I travel a lot, though. </li>
            <li>🎓 I have a bachelor degree in Computer Science. </li>
            <li>
              👩🏻‍💻 I've been working as a backend developer and full-stack
              developer for over five years now.
            </li>
            <li>👩🏻‍💻 Previously a frontend tech lead at Hasura.</li>
            <li>👩🏻‍💻 Currently a lead Blitz.js maintainer.</li>
            <li>🎾 I've been playing tennis for many years.</li>
            <li>🏔 I love hiking, and climbing.</li>
            <li>🎨 I like art. Especially Edward Hopper's.</li>
          </ul>
          <h2>Skills</h2>
          {skills.map((skillArea) => (
            <Skills key={skillArea.color}>
              {skillArea.items.map((skill) => (
                <StyledTag key={skill} color={skillArea.color}>
                  {skill}
                </StyledTag>
              ))}
            </Skills>
          ))}
        </div>
      </AboutMe>
    </Layout>
  );
};

export default AboutPage;

// const Bio: FunctionComponent<BioProps> = ({textAlign = 'center', avatarStyle, showName = false}) => {

//   return (
//     <StyledBio textAlign={textAlign}>
//       <Avatar alt={author.name} style={avatarStyle} />
//       {showName && <AuthorName>{author.name}</AuthorName>}
//       <AuthorDescription dangerouslySetInnerHTML={{__html: author.description}}/>
//       <SocialChannelList channels={author.social}/>
//     </StyledBio>
//   );
// };

// export default Bio;
