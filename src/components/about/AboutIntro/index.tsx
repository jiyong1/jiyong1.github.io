import React, { FC, useMemo } from 'react';
import IntroText from './style';

import { useDarkmode } from '@context/theme';

const AboutIntro: FC = () => {
  const mode = useDarkmode();
  const shadowColor = useMemo(() => {
    return mode === 'dark' ? 'black' : '#ccc';
  }, [mode]);
  const color = useMemo(() => {
    return mode === 'dark' ? '#222' : 'white';
  }, [mode]);

  return <IntroText style={{ textShadow: `0 10px 20px ${shadowColor}`, color }}>About Me</IntroText>;
};

export default AboutIntro;
