// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const CategoryDetailTemplate = path.resolve('src/templates/CategoryDetail.tsx');
  // const tagTemplate = path.resolve('src/layouts/categories.tsx');

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 2000) {
        edges {
          node {
            frontmatter {
              categories
              slug
            }
          }
        }
      }
      categoriesGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // const posts = result.data.postsRemark.edges;

  // // Create post detail pages
  // posts.forEach(({ node }) => {
  //   createPage({
  //     path: node.frontmatter.slug,
  //     component: blogPostTemplate,
  //   });
  // });

  // Extract tag data from query
  const categories = result.data.categoriesGroup.group;

  // Make tag pages
  categories.forEach((category) => {
    createPage({
      path: `/categories/${_.kebabCase(category.fieldValue)}/`,
      component: CategoryDetailTemplate,
      context: {
        category: category.fieldValue,
      },
    });
  });
};
