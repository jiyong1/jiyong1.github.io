import React from 'react';
import BaseLayout from '@layouts/base';

// about components
import ScrollTop from '@components/about/ScrollTop';
import Name from '@components/about/Name';
import SectionFirst from '@components/about/section-first';
import SectionSecond from '@components/about/section-second';

const About = (): JSX.Element => {
  return (
    <BaseLayout maxWidth={'100%'} title="About">
      <ScrollTop />
      <Name />
      <SectionFirst />
      <SectionSecond />
      <div style={{ height: '100vh' }}></div>
    </BaseLayout>
  );
};

export default About;
