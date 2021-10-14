import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import BubbleLink from '@components/BubbleLink';

const Introduce = (): JSX.Element => {
  const jiyong = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "jiyong.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            base64
            aspectRatio
            sizes
            src
            srcSet
            originalImg
          }
        }
      }
    }
  `);

  return (
    <IntroduceSection>
      <div className="introduce-grid-container">
        <Img
          className="bg-soft fluid-image"
          style={{ borderRadius: '50%' }}
          fluid={jiyong.file.childImageSharp.fluid}
        />
        <div className="introduce-contents">
          <div className="introduce-name">
            <p className="nick-name">@seventwo</p>
            <p className="real-name">김지용</p>
          </div>
          <p className="introduce-description">🧑‍💻 일단 부딪쳐보는 프론트엔드 개발자입니다.</p>
          <div className="contact-container">
            <BubbleLink iconClassName={'fab fa-github'} bubbleString={'github'} link={'https://github.com/jiyong1'} />
            <BubbleLink
              iconClassName="fas fa-file-alt"
              bubbleString="notion"
              link="https://mirror-lamb-c15.notion.site/c0736abeca144edab3de8b6d97ce6957"
            />
            <BubbleLink
              iconClassName="fab fa-instagram"
              bubbleString="instagram"
              link="https://www.instagram.com/wldydkim/"
            />
          </div>
        </div>
      </div>
    </IntroduceSection>
  );
};

const IntroduceSection = styled.section`
  max-width: 600px;
  margin: 2rem auto;
  .introduce-grid-container {
    display: grid;
    padding: 1rem;
    grid-template-columns: 1fr 2.5fr;
    align-items: center;
  }

  .introduce-contents {
    padding: 0 2rem;

    > * {
      margin: 1em 0;
    }

    .introduce-name {
      display: flex;
      align-items: flex-end;
      .nick-name {
        font-size: 1.2rem;
        font-weight: bold;
      }

      .real-name {
        font-size: 1rem;
        padding: 0 0.5em;
      }
    }
    .introduce-description {
      font-weight: 300;
      line-height: 1.5;
    }
  }
  .contact-container {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
  }

  @media screen and (max-width: ${({ theme }) => theme.size.medium}) {
    .fluid-image {
      max-width: 400px;
      margin: 0 auto;
    }
    .introduce-description {
      text-align: center;
    }
    .introduce-grid-container {
      display: block;

      .introduce-name {
        justify-content: center;
      }
    }
    .contact-container {
      justify-content: space-around;
    }
  }
`;

export default Introduce;
