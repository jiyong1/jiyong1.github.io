import React from 'react';

import BaseLayout from '@layouts/base';
// about components
import ScrollTop from '@components/about/ScrollTop';
import SectionFirst from '@components/about/section-first';
import SectionSecond from '@components/about/section-second';
import SectionThird from '@components/about/section-third';
import SectionLast from '@components/about/section-last';
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
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <SectionLast />
      <ScrollIndicator />
    </BaseLayout>
  );
};

export default About;
