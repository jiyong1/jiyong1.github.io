import React from 'react';
import styled from 'styled-components';

const PostSection = (): JSX.Element => {
  return (
    <Section>
      <h2>Posts</h2>
      <p className="post-description">매일 배운 내용을 정리 및 기록합니다.</p>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  h2 {
    font-size: min(9vw, 60px);
    font-weight: bold;
    margin: 2rem 0;
  }
  .post-description {
    font-weight: 300;
  }
`;

export default PostSection;
