import React from 'react';
import BaseLayout from '@layouts/base';

import Introduce from '@components/home/Introduce';

const Index = (): JSX.Element => {
  return (
    <BaseLayout maxWidth="100%" title="홈">
      <Introduce />
    </BaseLayout>
  );
};

export default Index;
