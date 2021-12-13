import React from 'react';
import styled from 'styled-components';

interface ITextProps {
  styleArr: React.CSSProperties[];
  bottom?: boolean;
}

const Text = ({ styleArr, bottom }: ITextProps): JSX.Element => {
  return (
    <TextWrapper className={styleArr[0] && !bottom ? 'text-display' : ''}>
      <div>
        <p className="text-item text-light base-top" style={styleArr[0]}>
          안녕하세요.
        </p>
        <p className="text-item text-bold text-mid" style={styleArr[1]}>
          프론트엔드
        </p>
        <p className="text-item text-bold text-mid" style={styleArr[2]}>
          일단 부딪쳐보는
        </p>
        <p className="text-item text-bold text-mid" style={styleArr[3]}>
          사용자를 중심으로 생각하는
        </p>
        <p className="text-item base-bottom text-light" style={styleArr[0]}>
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
  font-size: 7vw;
  line-height: 3;

  &.text-display {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .text-light {
    font-weight: 300;
  }
  .text-bold {
    font-weight: bold;
  }
  .text-mid {
    position: absolute;
    top: 50%;
    left: 5vw;
    transform: translateY(-50%);
  }
`;

export default Text;
