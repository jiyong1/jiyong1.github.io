import React from 'react';

import BaseLayout from '@layouts/Base';
// about components
import ScrollTop from '@components/about/ScrollTop';
import AboutIntro from '@components/about/AboutIntro';
import SectionFirst from '@components/about/SectionFirst';
import SectionSecond from '@components/about/SectionSecond';
import SectionThird from '@components/about/SectionThird';
import SectionLast from '@components/about/SectionLast';
import ScrollIndicator from '@components/about/ScrollIndicator';

const About = (): JSX.Element => {
  return (
    <BaseLayout
      maxWidth={'100%'}
      title="About"
      scrollBar={false}
      description="프론트엔드 개발자 seventwo의 포트폴리오입니다."
    >
      <ScrollTop />
      <AboutIntro />
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <SectionLast />
      <ScrollIndicator />
    </BaseLayout>
  );
};

export default About;
