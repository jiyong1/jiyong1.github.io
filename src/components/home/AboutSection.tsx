import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Phone from '@components/home/Phone';

const AboutSection = (): JSX.Element => {
  return (
    <Section className="bg-soft">
      <h2>About</h2>
      <p className="about-description">
        저를 <span>interactive</span>하게 소개합니다.
      </p>
      <div className="mac-phone-grid-container">
        <Phone />
      </div>
      <Link to="/about/">보러가기</Link>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  h2 {
    font-size: min(9vw, 60px);
    font-weight: bold;
    margin: 2rem 0;
  }
  .about-description {
    font-weight: 300;
    > span {
      font-size: 1.1rem;
      font-weight: 400;
    }
  }
  .mac-phone-grid-container {
    margin: 2rem 0;
    max-width: 1024px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > a {
    font-size: 1.5rem;
    margin-bottom: 1em;
  }
`;

export default AboutSection;
