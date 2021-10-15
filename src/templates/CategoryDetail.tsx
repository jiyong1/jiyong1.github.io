import React from 'react';

// Components
import { graphql, PageProps } from 'gatsby';

// layout
import Category from '@layouts/Category';

// categories component types
import { CategoriesQuery, SitePageContext } from '../../graphql-types';

const Categories: React.FC<PageProps<CategoriesQuery, SitePageContext>> = ({ pageContext, data }): JSX.Element => {
  return (
    <>
      <Category data={data} pageContext={pageContext} />
    </>
  );
};

export default Categories;

export const pageQuery = graphql`
  query categories($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
    ) {
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
