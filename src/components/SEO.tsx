import React from 'react';
import { Helmet } from 'react-helmet';

import favicon from '@images/favicon.ico';
import logo from '@images/logo.png';

interface ISEOProps {
  title?: string;
  scrollBar?: boolean;
  description?: string;
  ogImg?: string;
  date?: string;
}

const SEO = ({
  title,
  ogImg,
  date = new Date().toString(),
  description = 'seventwo 기술 블로그',
  scrollBar = true,
}: ISEOProps): JSX.Element => {
  const helmetTitle = title && title.length ? `${title} | seventwo 블로그` : 'seventwo 블로그';
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{helmetTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="article:published_time" content={date} />
      <script type="application/ld+json">
        {`{
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          datePublished: ${date},
          dateModified: ${date},
        }`}
      </script>
      <meta property="og:title" content={helmetTitle} />
      <meta property="og:image" content={ogImg ? ogImg : logo} />
      <meta property="og:description" content={description} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <script src="https://kit.fontawesome.com/63e1d65e2b.js" crossOrigin="anonymous"></script>
      <link rel="icon" href={favicon} />
      {!scrollBar ? (
        <style>{`body{-ms-overflow-style: none; scrollbar-width: none;} body::-webkit-scrollbar{display: none}`}</style>
      ) : (
        ''
      )}
      <meta name="google-site-verification" content="COHhIoFeM-JWk4uSElcrWwkBOnI5r4KaBiqi79Pz4aw" />
    </Helmet>
  );
};

export default SEO;
