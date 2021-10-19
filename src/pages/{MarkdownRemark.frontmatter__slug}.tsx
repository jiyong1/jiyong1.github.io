import React from 'react';
import { graphql, PageProps } from 'gatsby';
import styled from 'styled-components';

import BaseLayout from '@layouts/base';
import SNB from '@components/SNB';

interface MarkdownPageProps extends PageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
        description: string;
      };
      html: string;
    };
  };
}

export default function Template({ data }: MarkdownPageProps): JSX.Element {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <BaseLayout
      maxWidth="726px"
      title={frontmatter.title}
      description={frontmatter.description}
      date={new Date(frontmatter.date).toString()}
    >
      <div className="blog-post-container">
        <Post className="blog-post">
          <div className="post-info">
            <h1 className="post-header">{frontmatter.title}</h1>
            <h2 className="post-date">{frontmatter.date}</h2>
          </div>
          <PostContent className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </Post>
      </div>
      <SNB />
    </BaseLayout>
  );
}

const Post = styled.div`
  padding: 0 0.5rem;
  .post-header {
    font-size: 1.6rem;
    font-weight: bold;
  }
  .post-date {
    color: #666;
  }
  .post-info {
    margin: 1.5rem 0;
    line-height: 1.3;
  }
`;

const PostContent = styled.div`
  * {
    line-height: 1.6;
    font-weight: 300;
  }
  > * {
    margin: 1em 0;
  }
  strong {
    font-weight: bold;
  }
  ol,
  ul {
    padding-inline-start: 1.2em;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
  }

  code,
  pre {
    font-size: 0.9em !important;
  }
  blockquote {
    border-left-width: 3px;
    border-left-style: solid;
    font-size: 0.9rem;
    padding: 0.5em 0 0.5em 1em;
    color: #999;
  }
  table {
    width: 100%;
    border-radius: 6px;
  }
  tbody {
    tr {
      border-top: 1px solid;
    }
  }
  thead {
    font-weight: bold;
  }
  td,
  th {
    padding: 0.5em;
  }
  td:nth-of-type(n + 2) {
    border-left: 1px solid;
  }
`;

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
      }
    }
  }
`;
