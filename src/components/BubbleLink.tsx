import React from 'react';
import styled, { keyframes } from 'styled-components';

interface IBuubleLinkProps {
  iconClassName: string;
  bubbleString: string;
  link: string;
}

const BubbleLink = ({ iconClassName, bubbleString, link }: IBuubleLinkProps): JSX.Element => {
  return (
    <LinkWrapper>
      <a href={link} target="_blank" rel="noreferrer">
        <i className={iconClassName}></i>
      </a>
      <div aria-hidden className="bubble">
        <p className="bubble-box bg-soft">{bubbleString}</p>
        <div className="bubble-pointer bg-soft"></div>
      </div>
    </LinkWrapper>
  );
};

const bubbleFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0);
  } to {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
`;

const LinkWrapper = styled.div`
  position: relative;
  display: inline-block;
  a {
    font-size: 1.2rem;
    color: inherit !important;
  }

  .bubble {
    display: none;
    position: absolute;
    bottom: 150%;
    left: 50%;
    transform: translateX(-50%);
    animation: ${bubbleFadeIn} 0.3s forwards;

    .bubble-box {
      position: relative;
      z-index: 2;
      font-size: 0.9rem;
      padding: 0.5em;
      border-radius: 6px;
    }
    .bubble-pointer {
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: 50%;
      transform: translate3d(-50%, 50%, 0) rotate(45deg);
      width: 8px;
      height: 8px;
    }
  }

  &:hover {
    a {
      opacity: 0.5;
    }
    .bubble {
      display: block;
    }
  }
`;

export default BubbleLink;
