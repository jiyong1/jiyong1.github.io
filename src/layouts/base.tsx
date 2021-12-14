import React, { useLayoutEffect } from 'react';
import GlobalStyle from '../style/GlobalStyle';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import styled, { ThemeProvider } from 'styled-components';
import DarkContext from '@context/theme';

import SEO from '@components/SEO';
import TopNav from '@components/MainNav';
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
  scrollBar?: boolean;
  description?: string;
  ogImg?: string;
  date?: string;
}

const BaseLayout = ({
  children,
  title,
  ogImg,
  description,
  scrollBar,
  date,
  maxWidth = '1024px',
}: IBaseLayoutProps): JSX.Element => {
  useLayoutEffect(() => {
    if (!localStorage.getItem('theme')) {
      const isDark = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
      const darkmode = isDark ? 'dark' : 'light';
      localStorage.setItem('theme', darkmode);
    }
  }, []);

  return (
    <React.Fragment>
      <GlobalStyle />
      <SEO title={title} scrollBar={scrollBar} ogImg={ogImg} description={description} date={date} />
      <ThemeProvider theme={theme}>
        <ThemeToggler>
          {({ theme, toggleTheme }: IThemeProps) => {
            if (!theme) {
              return null;
            }
            return (
              <DarkContext.Provider value={theme}>
                <TopNav theme={theme} toggleTheme={toggleTheme} />
                <Content style={{ maxWidth }}>{children}</Content>
                <Footer />
              </DarkContext.Provider>
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
