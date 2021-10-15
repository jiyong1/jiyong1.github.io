import React from 'react';

import { graphql, PageProps } from 'gatsby';

import Category from '@layouts/Category';

import { AllCategoriesQuery, SitePageContext } from '../../graphql-types';

const Categories: React.FC<PageProps<AllCategoriesQuery, SitePageContext>> = ({ data, pageContext }): JSX.Element => {
  return (
    <>
      <Category data={data} pageContext={pageContext} />
    </>
  );
};

export default Categories;

export const pageQuery = graphql`
  query AllCategories {
    allMarkdownRemark(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            slug
            title
            description
            date(formatString: "MMMM DD, YYYY")
            categories
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  aspectRatio: 1.5
                  transformOptions: { fit: CONTAIN }
                  placeholder: NONE
                  formats: [AUTO, WEBP, AVIF]
                  backgroundColor: "transparent"
                )
              }
            }
          }
        }
      }
    }
  }
`;
