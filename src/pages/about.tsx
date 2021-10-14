import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import BaseLayout from '@layouts/base';
// about components
import ScrollTop from '@components/about/ScrollTop';
import Name from '@components/about/Name';
import SectionFirst from '@components/about/section-first';
import SectionSecond from '@components/about/section-second';
import SectionThird from '@components/about/section-third';

const About = (): JSX.Element => {
  return (
    <BaseLayout maxWidth={'100%'} title="About">
      <ScrollTop />
      <Name />
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <AboutLastSection>
        <p className="thank-text">감사합니다 😊</p>
        <div className="button-container">
          <Link className="bg-soft" to="/">
            블로그 홈으로
          </Link>
          <Link className="bg-soft" to="/categories/">
            게시물 보러가기
          </Link>
          <a className="bg-soft" href="https://github.com/jiyong1">
            seventwo Github
          </a>
          <a className="bg-soft" href="https://mirror-lamb-c15.notion.site/c0736abeca144edab3de8b6d97ce6957">
            seventwo Notion
          </a>
        </div>
      </AboutLastSection>
    </BaseLayout>
  );
};

const AboutLastSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  .thank-text {
    font-size: 2rem;
    margin: 2em 0;
  }
  .button-container {
    display: grid;
    padding: 0 1rem;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-width: 600px;
    grid-gap: 1.5rem;
    justify-content: center;

    > * {
      font-size: 1.1rem;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 1rem;
      &:hover {
        color: inherit;
        opacity: 0.7;
      }
    }
  }
`;

export default About;
