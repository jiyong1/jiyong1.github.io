import React from 'react';
import GlobalStyle from './GlobalStyle';
import { Helmet } from 'react-helmet';
import favicon from '@images/favicon.ico';

const BaseLayout = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href={favicon} />
      </Helmet>
      {children}
    </React.Fragment>
  );
};

export default BaseLayout;
