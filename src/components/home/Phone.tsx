import React from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import phoneScroll from '@images/phonescroll.gif';

const Phone = (): JSX.Element => {
  const phone = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "phone.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 200, height: 400, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const phoneImg = getImage(phone.file);
  if (!phoneImg) return <></>;

  // width 188
  // left 8
  // top 8
  // height: 382
  return (
    <PhoneWrapper>
      <GatsbyImage style={{ position: 'relative', zIndex: 2 }} image={phoneImg} alt="핸드폰 레이아웃"></GatsbyImage>
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
