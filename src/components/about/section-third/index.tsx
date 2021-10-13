import React, { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';

import ObserverSection from '../Section';
import StickyHeader from '../StickyHeader';
import SkillSlider from './SkillSlider';
import slideStyle from './style';

import useRFA from '@hooks/useRFA';
import stylePercentGenerate from '@utils/aboutStyle';

import { skillsFirst, skillsSecond } from './text';

const SectionThird = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderWrapperRef = useRef<HTMLDivElement>(null);
  const [slideStyleArr, setSlideStyleArr] = useState<React.CSSProperties[]>([]);

  const threshold = useMemo(() => {
    return Array.from({ length: 1001 }, (_, idx) => idx * 0.001);
  }, []);

  const slideStyleGenerater = useCallback((percentage: number | undefined) => {
    if (typeof percentage !== 'number') return;
    const styleArr = stylePercentGenerate(percentage, slideStyle, 1);
    setSlideStyleArr(styleArr);
  }, []);

  const slideRFA = useRFA<number>(slideStyleGenerater);

  const sliderObserverHandler = useCallback((entries: IntersectionObserverEntry[], obs: IntersectionObserver) => {
    const sliderWrapper = entries[0];
    if (!sliderWrapper.isIntersecting) return;
    const { bottom, height } = sliderWrapper.boundingClientRect;
    const percentage =
      bottom > height ? (sliderWrapper.intersectionRatio * 100) / 2 : (1 - sliderWrapper.intersectionRatio + 0.5) * 100;
    if (percentage < 0 || percentage > 100) return;
    slideRFA(percentage);
  }, []);

  useEffect(() => {
    if (!sliderWrapperRef.current) return;
    const observer = new IntersectionObserver(sliderObserverHandler, { threshold });
    observer.observe(sliderWrapperRef.current);
    return () => {
      observer.disconnect();
    };
  }, [sliderWrapperRef]);

  return (
    <ObserverSection ref={sectionRef} style={{ marginTop: '50vh' }}>
      <StickyHeader header={'Skills'} fixed={true} />
      <SliderWrapper ref={sliderWrapperRef}>
        <SkillSlider style={slideStyleArr[0]} left={true} skills={skillsFirst} />
        <SkillSlider style={slideStyleArr[1]} left={false} skills={skillsSecond} />
        <div className="shadow slider-shadow-right"></div>
        <div className="shadow slider-shadow-left"></div>
      </SliderWrapper>
    </ObserverSection>
  );
};

const SliderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #0b0d0d;
  .shadow {
    position: absolute;
    z-index: 2;
    top: 0;
    width: 100px;
    height: 100%;
  }
  .slider-shadow-right {
    right: 0;
    background-image: linear-gradient(270deg, #333, rgba(51, 51, 51, 0));
  }
  .slider-shadow-left {
    left: 0;
    background-image: linear-gradient(90deg, #333, rgba(51, 51, 51, 0));
  }
`;

export default SectionThird;
