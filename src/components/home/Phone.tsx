import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import phoneScroll from '@images/phonescroll.gif';

const Phone = (): JSX.Element => {
  const phone = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "phone.png" }) {
        childImageSharp {
          fixed(width: 200, height: 400) {
            base64
            aspectRatio
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `);

  // width 188
  // left 8
  // top 8
  // height: 382
  return (
    <PhoneWrapper>
      <Img style={{ position: 'relative', zIndex: 2 }} fixed={phone.file.childImageSharp.fixed}></Img>
      <div className="gif-container">
        <img src={phoneScroll} alt={'모바일 화면에서 스크롤'} />
      </div>
    </PhoneWrapper>
  );
};

const PhoneWrapper = styled.div`
  position: relative;

  .gif-container {
    position: absolute;
    background-color: var(--soft-black);
    z-index: 1;
    top: 9px;
    left: 11px;
    width: 178px;
    height: 377px;
    border-radius: 20px;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: left;
    }
  }
`;

export default Phone;
