import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { IExperienceType } from './text';

interface IExperienceProps {
  experience: IExperienceType;
  left: boolean;
  display: boolean;
  idx: number;
  id: string;
}

const Experience = forwardRef<HTMLLIElement, IExperienceProps>(({ experience, left, display, idx, id }, ref) => {
  const { header, description, projects, date } = experience;

  return (
    <ExperieceWrapper
      id={id}
      ref={ref}
      style={{ gridRowStart: idx + 1 }}
      className={(left ? 'from-left' : 'from-right') + (display ? ' display' : '')}
    >
      <div className="bg-soft exp--container">
        <div className="exp--item--header">
          <h4 className="exp--title">{header}</h4>
          <p className="exp--date">{date}</p>
        </div>
        <p className="exp--description">{description}</p>
        {projects ? (
          <>
            <ul className="exp--detail--wrapper bg-normal">
              <div className="exp--detail bg-normal invert">Detail</div>
              {projects.map(({ content, github, youtube, link }) => {
                return (
                  <li key={content} className="color-soft">
                    <p>{content}</p>
                    {github && (
                      <a target="_blank" href={github} rel="noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {youtube && (
                      <a target="_blank" href={youtube} rel="noreferrer">
                        <i className="fab fa-youtube"></i>
                      </a>
                    )}
                    {link && (
                      <a target="_blank" href={link} rel="noreferrer">
                        <i className="fas fa-link"></i>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <></>
        )}
      </div>
    </ExperieceWrapper>
  );
});

Experience.displayName = 'Experience';

const ExperieceWrapper = styled.li`
  margin: 8vh 1rem;
  overflow: hidden;
  .exp--item--header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 1rem;
  }
  .exp--title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .exp--date {
    font-size: 0.9rem;
    font-weight: 400;
  }
  .exp--detail--wrapper {
    position: relative;
    z-index: 1;
    list-style: none;
    margin: 2em 0 0 0;
    padding: 1em;
    border-radius: 10px;
    .exp--detail {
      position: absolute;
      z-index: 1;
      left: 50%;
      top: 0%;
      transform: translate3d(-50%, -50%, 0);
      border-radius: 5px;
      padding: 0.3em;
    }
    li {
      font-size: 0.9rem;
      padding: 0.5em;
      > * {
        display: inline-block;
      }
      > a {
        font-size: 1rem;
        margin: 0 0.5em;
      }
    }
  }
  .exp--container {
    border-radius: 1rem;
    transition: 0.5s;
    padding: 1rem;
    line-height: 1.6;
  }
  &.from-left {
    grid-column-start: 1;
    grid-column-end: 3;
    .exp--container {
      transform: translateX(-120%);
    }
  }
  &.from-right {
    grid-column-start: 2;
    grid-column-end: 4;
    .exp--container {
      transform: translateX(120%);
    }
  }
  &.display .exp--container {
    transform: translateX(0);
  }

  @media (max-width: ${({ theme }) => theme.size.medium}) {
    &.from-left,
    &.from-right {
      grid-column-start: 1;
      grid-column-end: 2;
    }
    .exp--item--header {
      display: block;
    }
    .exp--title {
      font-size: 1.1rem;
      font-weight: bold;
    }
    .exp--description {
      font-size: 0.9rem;
    }
  }
`;

export default Experience;
