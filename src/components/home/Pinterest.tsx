import React, { useCallback, useEffect, useRef, useMemo, useState } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import PinterestItem from './PinterestItem';
import useDebounce from '@hooks/useDebounce';

import { NewspeedQuery } from 'graphql-types';

const Pinterest = (): JSX.Element => {
  const [resize, setResize] = useState<boolean>(false);
  // const [tl, setTl] = useState<[number, number][]>([]);
  const data: NewspeedQuery = useStaticQuery(graphql`
    query Newspeed {
      allMarkdownRemark(limit: 12, sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              title
              date(formatString: "MMMM DD, YYYY")
              featuredImage {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE, formats: [AUTO, WEBP, AVIF])
                }
              }
            }
          }
        }
      }
    }
  `);
  const posts = useMemo(() => {
    return data.allMarkdownRemark.edges;
  }, [data]);
  const [ulWidth, setUlWidth] = useState<number>(0);
  const [ulBottom, setUlBottom] = useState<number>(0);
  const liRef = useRef<number[]>([]);

  const tl = useMemo(() => {
    let columnCount = 4;
    if (ulWidth < 400) columnCount = 1;
    else if (ulWidth < 648) columnCount = 2;
    else if (ulWidth < 856) columnCount = 3;

    const liWidth = ulWidth / columnCount;
    const heightStack = Array.from({ length: columnCount }, () => 0);
    const tlArr = Array.from({ length: liRef.current.length }, () => [0, 0]) as [number, number][];
    liRef.current.forEach((height, idx) => {
      const currentMin = Math.min(...heightStack);
      const minIdx = heightStack.indexOf(currentMin);

      // top
      tlArr[idx][0] = currentMin;

      // left
      tlArr[idx][1] = minIdx * liWidth;

      heightStack[minIdx] += height;
    });
    setUlBottom(Math.max(...heightStack));
    return tlArr;
  }, [ulWidth, resize]);

  const resizeHandler = useDebounce(
    () => {
      setResize(false);
    },
    400,
    () => {
      setResize(true);
    },
  );

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <PinterestWrapper
      ref={(el) => {
        if (el) setUlWidth(el.getBoundingClientRect().width);
      }}
      style={{
        opacity: resize ? 0 : 1,
        marginBottom: `${ulBottom}px`,
      }}
    >
      {posts.map(({ node }, idx) => (
        <PinterestItem
          ref={(el) => {
            if (el) {
              liRef.current[idx] = el.getBoundingClientRect().height;
            }
          }}
          tl={tl[idx]}
          key={`pin-${node.frontmatter?.title}`}
          data={node.frontmatter}
        />
      ))}
    </PinterestWrapper>
  );
};

const PinterestWrapper = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;
  max-width: 1024px;
  width: 100%;
  margin: 1rem auto;
`;

export default Pinterest;
