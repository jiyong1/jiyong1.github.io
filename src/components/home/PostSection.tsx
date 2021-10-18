import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Pinterest from './Pinterest';

const PostSection = (): JSX.Element => {
  return (
    <Section>
      <h2>Posts</h2>
      <p className="post-description">매일 배운 내용을 정리 및 기록합니다.</p>
      <h3>새로운 게시물</h3>
      <Pinterest />
      <Link className="categories-btn bg-soft not-hover" to="/categories/">
        더 보러가기
      </Link>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h2 {
    font-size: min(9vw, 60px);
    font-weight: bold;
    margin: 2rem 0;
  }
  .post-description {
    font-weight: 300;
  }
  > h3 {
    font-size: 1.5rem;
    margin-top: 2em;
  }
  .categories-btn {
    font-size: 1.2rem;
    padding: 1em;
    border-radius: 10px;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export default PostSection;
