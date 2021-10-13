import React, { forwardRef } from 'react';
import styled from 'styled-components';

interface IStickyHeaderProps {
  header: string;
  style?: React.CSSProperties;
  fixed?: boolean;
  soft?: boolean;
}

const StickyHeader = forwardRef<HTMLHeadingElement, IStickyHeaderProps>(({ header, style, fixed, soft }, ref) => {
  return (
    <StickyHeaderWrapper
      className={(fixed ? 'header-fixed' : '') + (fixed && soft ? ' bg-soft' : ' bg-normal')}
      ref={ref}
      style={style}
    >
      {header}
    </StickyHeaderWrapper>
  );
});

StickyHeader.displayName = 'StickyHeader';

const StickyHeaderWrapper = styled.h2`
  display: inline-block;
  font-size: 6vw;
  padding: 1rem;
  font-weight: bold;
  transform-origin: left;

  &.header-fixed {
    position: sticky;
    z-index: 6;
    width: 100%;
    left: 0;
    top: 0.6rem;
  }
`;

export default StickyHeader;
