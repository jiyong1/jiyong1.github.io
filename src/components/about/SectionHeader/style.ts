import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  font-size: min(6vw, 70px);
  padding: 0.5em;
  &.header__fixed {
    position: sticky;
    z-index: 3;
    top: 0;
    left: 0;
  }
`;

export const Header = styled.h2`
  display: inline-block;
  position: relative;
  font-weight: bold;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: 0.4s;
  }

  &.light::after {
    background-color: black;
  }
  &.dark::after {
    background-color: white;
  }
  &.header__display::after {
    transform: translate3d(120%, 0, 0);
  }
`;
