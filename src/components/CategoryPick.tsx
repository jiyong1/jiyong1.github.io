import React from 'react';
import kebabCase from 'lodash/kebabCase';
// Components
import { Link, graphql, useStaticQuery } from 'gatsby';

import styled from 'styled-components';

interface CategoriesDataType {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
  allMarkdownRemark: {
    group: [
      {
        fieldValue: string;
        totalCount: number;
      },
    ];
    totalCount: number;
  };
}

const CategoryPick = (): JSX.Element => {
  const data: CategoriesDataType = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
        pathPrefix
      }
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `);

  const { group } = data.allMarkdownRemark;

  return (
    <PickWrapper className="bg-soft">
      <li>
        <Link to="/categories" activeClassName="bg-brown">
          All
        </Link>
      </li>
      {group.map((category) => (
        <li key={category.fieldValue}>
          <Link to={`/categories/${kebabCase(category.fieldValue)}/`} activeClassName="bg-brown">
            {category.fieldValue}
          </Link>
        </li>
      ))}
    </PickWrapper>
  );
};

const PickWrapper = styled.ul`
  position: sticky;
  top: 0;
  display: flex;
  padding: 0.8rem 2rem !important;
  margin: 0;
  overflow: auto;
  flex-wrap: nowrap;
  white-space: nowrap;
  z-index: 4;
  li {
    margin: 0.3rem;
  }

  li:first-child {
    margin-left: auto;
  }
  li:last-child {
    margin-right: auto;
  }

  a {
    font-size: 0.9rem;
    padding: 0.5em;
    width: 100%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:not(.bg-brown) {
      color: #777;
    }
  }
  a.bg-brown {
    pointer-events: none;
  }
`;

export default CategoryPick;
