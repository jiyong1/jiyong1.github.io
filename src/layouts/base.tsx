import React, { useEffect } from 'react';
import GlobalStyle from './GlobalStyle';
import { Helmet } from 'react-helmet';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import styled, { ThemeProvider } from 'styled-components';

import favicon from '@images/favicon.ico';
import TopNav from '@components/topnav';
import Footer from '@components/Footer';
import theme from '../style/theme';

interface IThemeProps {
  theme: string;
  toggleTheme: (value: string) => void;
}

interface IBaseLayoutProps {
  children: React.ReactNode;
  title?: string;
  maxWidth?: string;
}

const BaseLayout = ({ children, title, maxWidth = '1024px' }: IBaseLayoutProps): JSX.Element => {
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      const isDark = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
      const darkmode = isDark ? 'dark' : 'light';
      localStorage.setItem('theme', darkmode);
    }
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title && title.length ? `${title} | seventwo devlog` : 'seventwo devlog'}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script src="https://kit.fontawesome.com/63e1d65e2b.js" crossOrigin="anonymous"></script>
        <link rel="icon" href={favicon} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <ThemeToggler>
          {({ theme, toggleTheme }: IThemeProps) => {
            return (
              <>
                <TopNav theme={theme} toggleTheme={toggleTheme} />
                <Content style={{ maxWidth }}>{children}</Content>
                <Footer />
              </>
            );
          }}
        </ThemeToggler>
      </ThemeProvider>
    </React.Fragment>
  );
};

const Content = styled.div`
  margin: 0 auto;
`;

export default BaseLayout;
