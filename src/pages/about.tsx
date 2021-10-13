import React from 'react';
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
      <p
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          fontSize: '2rem',
        }}
      >
        감사합니다 😊
      </p>
    </BaseLayout>
  );
};

export default About;
