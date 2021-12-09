import React, { FC } from 'react';
import AboutLastSection from './style';
import { Link } from 'gatsby';

const SectionLast: FC = () => {
  return (
    <AboutLastSection>
      <p className="thank-text">감사합니다 😊</p>
      <div className="button-container">
        <Link className="bg-soft" to="/">
          블로그 홈으로
        </Link>
        <Link className="bg-soft" to="/categories/">
          게시물 보러가기
        </Link>
        <a className="bg-soft" href="https://github.com/jiyong1">
          seventwo Github
        </a>
        <a className="bg-soft" href="https://mirror-lamb-c15.notion.site/c0736abeca144edab3de8b6d97ce6957">
          seventwo Notion
        </a>
      </div>
    </AboutLastSection>
  );
};

export default SectionLast;
