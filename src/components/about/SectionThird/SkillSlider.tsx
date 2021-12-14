import React from 'react';
import styled from 'styled-components';

import { ISkillType } from './text';

interface ISliderProps {
  skills: ISkillType[];
  style?: React.CSSProperties;
  left?: boolean;
}

const SkillSlider = ({ skills, style, left }: ISliderProps): JSX.Element => {
  return (
    <SliderWrapper style={style} className={left ? 'from-left' : 'from-right'}>
      {skills.map(({ name }) => {
        return (
          <div className="skill-box" key={`skill-box-${name}`}>
            {name}
          </div>
        );
      })}
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 1rem;
  transition: 50ms ease-out;

  &.from-left {
    top: 35%;
    left: 90%;
  }

  &.from-right {
    top: 65%;
    right: 90%;
  }

  .skill-box {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.7rem;
    width: 260px;
    height: 146px;
    border-radius: 1rem;
    color: white;
    background-color: #1f242c;
  }
`;

export default SkillSlider;
