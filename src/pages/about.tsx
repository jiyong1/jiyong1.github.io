import React from 'react';
import styled from 'styled-components';
import BaseLayout from '@layouts/base';

const About = (): JSX.Element => {
  return (
    <BaseLayout title="About">
      <AboutWrapper>about!</AboutWrapper>
    </BaseLayout>
  );
};

const AboutWrapper = styled.div``;

export default About;
