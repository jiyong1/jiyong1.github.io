import React from 'react';
import styled from 'styled-components';

interface ITextProps {
  styleArr: React.CSSProperties[];
}

const Text = ({ styleArr }: ITextProps): JSX.Element => {
  return (
    <TextWrapper className={styleArr[0] ? 'text-display' : ''}>
      <div className="invert-color">
        <p className="text-item base-top" style={styleArr[0]}>
          안녕하세요.
        </p>
        <p className="text-item base-bottom" style={styleArr[0]}>
          <span className="text-bold">개발자 김지용</span>입니다.
        </p>
      </div>
    </TextWrapper>
  );
};

const TextWrapper = styled.div`
  padding: 5vw;
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  font-size: 8vw;
  line-height: 3;

  &.text-display {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .text-bold {
    font-weight: bold;
  }
  .text-item {
    opacity: 0;
  }
`;

export default Text;
