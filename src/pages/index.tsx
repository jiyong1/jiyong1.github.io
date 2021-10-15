import React from 'react';
import BaseLayout from '@layouts/base';

import Introduce from '@components/home/Introduce';
import AboutSection from '@components/home/AboutSection';

const Index = (): JSX.Element => {
  return (
    <BaseLayout maxWidth="100%" title="홈">
      <Introduce />
      <AboutSection />
    </BaseLayout>
  );
};

export default Index;
