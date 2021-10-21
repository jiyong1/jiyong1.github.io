import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { NewspeedQuery } from '../../../graphql-types';

interface ItemProps {
  tl?: [number, number];
  data: DataType;
}

type DataType = NewspeedQuery['allMarkdownRemark']['edges'][0]['node']['frontmatter'];

const PinterestItem = forwardRef<HTMLLIElement, ItemProps>(({ tl = [0, 0], data }, ref): JSX.Element => {
  if (!data || !data.slug || !data.title || !data.featuredImage || !data.date) return <></>;
  const image = getImage(data.featuredImage as ImageDataLike);
  return (
    <Item ref={ref} style={{ top: `${tl[0]}px`, left: `${tl[1]}px` }}>
      <div className="newspeed-item bg-soft">
        <Link to={data.slug}>
          {image ? (
            <GatsbyImage className="newspeed-image-wrapper" image={image} alt={data.title} imgClassName="bg-normal" />
          ) : (
            <></>
          )}
          <div>
            <p className="newspeed-title">{data.title}</p>
            <p className="newspeed-date">{data.date}</p>
          </div>
        </Link>
      </div>
    </Item>
  );
});

PinterestItem.displayName = 'PinterestItem';

const Item = styled.li`
  width: 25%;
  padding: 10px;
  position: absolute;

  .newspeed-item {
    border-radius: 10px;
    padding: 0.5rem;

    .newspeed-image-wrapper {
      border-radius: 6px;
      overflow: hidden;
    }
    .newspeed-title {
      margin: 1rem 0;
    }
    .newspeed-date {
      font-size: 0.8rem;
      color: #777 !important;
    }
  }

  @media screen and (max-width: 855px) {
    width: 33.33%;
  }

  @media screen and (max-width: ${({ theme }) => theme.size.medium}) {
    width: 50%;
  }

  @media screen and (max-width: 399px) {
    width: 100%;
  }
`;

export default PinterestItem;
