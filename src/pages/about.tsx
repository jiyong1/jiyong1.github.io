import React from 'react';
import BaseLayout from '@layouts/base';

// about components
import Name from '@components/about/Name';
import Introduce from '@components/about/Introduce';

const About = (): JSX.Element => {
  return (
    <BaseLayout maxWidth={'100%'} title="About">
      <div style={{ padding: '1rem' }}>
        <Name />
        <Introduce />
      </div>
    </BaseLayout>
  );
};

export default About;
