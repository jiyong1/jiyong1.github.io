import React from 'react';
import BaseLayout from '@layouts/base';

// about components
import ScrollTop from '@components/about/ScrollTop';
import Name from '@components/about/Name';
import SectionFirst from '@components/about/section-first';
// import SectionSecond from '@components/about/section-second';

const About = (): JSX.Element => {
  return (
    <BaseLayout maxWidth={'100%'} title="About">
      <ScrollTop />
      <Name />
      <SectionFirst />
      <div style={{ height: '300vh', border: '2px solid red' }}></div>
    </BaseLayout>
  );
};

export default About;
