import styled, { keyframes } from 'styled-components';

const scrollPathAnimation = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, -10%, 0);
  }
`;

const ScrollIndicatorWrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0.5rem;
  left: 0;
  transition: 0.5s;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  > svg {
    width: 0.9em;
    height: 0.9em;

    > path {
      fill: none;
      stroke-width: 12;
      stroke-linecap: round;
      stroke-linejoin: round;

      animation: ${scrollPathAnimation} 0.4s infinite alternate;

      &:nth-child(2) {
        animation-delay: 0.2s;
      }
    }
  }
`;

export default ScrollIndicatorWrapper;
