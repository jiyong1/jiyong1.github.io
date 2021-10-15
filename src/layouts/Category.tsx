import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import BaseLayout from './base';
import CategoryPick from '@components/CategoryPick';

import { AllCategoriesQuery, CategoriesQuery, SitePageContext } from '../../graphql-types';

interface Props<T> {
  pageContext: SitePageContext;
  data: T;
}

type DataType = CategoriesQuery | AllCategoriesQuery;

function Category<T extends DataType>({ pageContext, data }: Props<T>): JSX.Element {
  const { category } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;

  return (
    <BaseLayout title={category ? category : '전체 게시물'} maxWidth={'100%'}>
      <CategoryWrapper>
        <CategoryPick />
        <CategoryHeader>
          <h1>{category ? <span className="brown-color">{category}</span> : '전체 게시물'}</h1>
          <p>{totalCount} posts</p>
        </CategoryHeader>
        <ul className="category-content">
          {edges.map(({ node }) => {
            // type guard
            if (
              !node.frontmatter ||
              !node.frontmatter.title ||
              !node.frontmatter.slug ||
              !node.frontmatter.description ||
              !node.frontmatter.date ||
              !node.frontmatter.featuredImage ||
              !node.frontmatter.categories
            )
              return <></>;
            const { title, slug, description, date, featuredImage, categories } = node.frontmatter;

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const image = getImage(featuredImage);
            if (!image) return <></>;
            return (
              <CategoryContentItem key={slug} className="bg-soft">
                <Link to={slug}>
                  <GatsbyImage image={image} alt={title} className={'item-image-wrapper'} imgClassName="bg-normal" />
                  <div className="item-info">
                    <p className="item-title item-text">{title}</p>
                    <p className="item-description item-text">{description}</p>
                    <div className="item-sub-info">
                      <p>{date}</p>
                      <p className="sub-categories">
                        {categories.map((category) => {
                          return (
                            <span className="bg-normal" key={`sub-category-${category}`}>
                              {category}
                            </span>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
              </CategoryContentItem>
            );
          })}
        </ul>
      </CategoryWrapper>
    </BaseLayout>
  );
}

const CategoryWrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
  }
  .category-content {
    max-width: 1024px;
    width: 100%;
    padding: 1.5rem 1rem;
    margin: 0 auto;
  }
`;

const CategoryContentItem = styled.li`
  width: 100%;
  margin: 2rem 0;
  border-radius: 10px;
  padding: 0.5rem;
  line-height: 1.5em;
  .item-image-wrapper {
    border-radius: 6px;
    img {
      transition: 0.4s;
    }
  }
  a {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 1rem;
    &:hover {
      color: inherit !important;
      img {
        transform: scale(1.1);
      }
    }
  }
  .item-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
  }
  .item-text {
    display: -webkit-box;
    width: 100%;
    margin-bottom: 1rem;
    text-overflow: ellipsis;
    word-wrap: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-height: 4.5em;
    overflow: hidden;
  }
  .item-title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .item-sub-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    color: #777;
  }
  .sub-categories {
    span {
      padding: 0.3em;
      border-radius: 4px;
    }
    > *:not(*:first-child) {
      margin-left: 0.5em;
    }
  }
  @media (max-width: ${({ theme }) => theme.size.medium}) {
    a {
      display: block;
    }
    .item-image-wrapper {
      max-width: 500px;
      margin: 1rem auto;
    }
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1em 0;
  }
  p {
    font-size: 1.2rem;
  }
`;

export default Category;
