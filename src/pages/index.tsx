import React from 'react';
import BaseLayout from '@layouts/Base';

import Introduce from '@components/home/Introduce';
import AboutSection from '@components/home/AboutSection';
import PostSection from '@components/home/PostSection';

const Index = (): JSX.Element => {
  return (
    <BaseLayout maxWidth="100%" title="홈" description="프론트엔드 개발자의 블로그">
      <Introduce />
      <AboutSection />
      <PostSection />
    </BaseLayout>
  );
};

export default Index;
