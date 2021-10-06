import React from 'react';
import styled from 'styled-components';
import { IThemeTogglerProps } from '@types';

const ThemeToggler = ({ theme, toggleTheme }: IThemeTogglerProps) => {
  const toggleHandler = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    toggleTheme(nextTheme);
  };

  return (
    <ThemeTogglerContainer onClick={toggleHandler} className="bg-normal off-display">
      <ThemeButton className={'invert ' + theme} />
      <i className="fas fa-sun"></i>
      <i className="fas fa-moon"></i>
    </ThemeTogglerContainer>
  );
};

const ThemeTogglerContainer = styled.div`
  width: 3rem;
  height: 1.5rem;
  border: 2px solid;
  border-radius: 1rem;
  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;

  > i {
    font-size: 0.9rem;
    &.fa-sun {
      color: red;
    }
    &.fa-moon {
      color: yellow;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

const ThemeButton = styled.div`
  position: absolute;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  transition: 0.4s;

  &.light {
    transform: translate3d(135%, -50%, 0);
  }
`;

export default ThemeToggler;
