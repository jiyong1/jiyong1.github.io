import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import logo from '@images/logo.png';

import { IThemeTogglerProps } from '@types';
import ThemeToggler from './theme-toggler';
import Portal from './modal';

const TopNav = ({ theme, toggleTheme }: IThemeTogglerProps): JSX.Element => {
  const [contentDisplay, setContentDisplay] = useState<boolean>(false);
  const contentToggleHandler = useCallback(() => {
    setContentDisplay(!contentDisplay);
  }, [contentDisplay]);

  const contentOff = useCallback(() => {
    setContentDisplay(false);
  }, []);

  return (
    <Nav className={'bg-soft'}>
      <Link to="/">
        <header>
          <span className={'seventwo brown-color'}>seventwo</span>
          <span>블로그</span>
        </header>
      </Link>
      <img src={logo} alt="seventwo logo 이미지" className="nav__top--logo" />
      <div className="nav__top--right">
        <ThemeToggler theme={theme} toggleTheme={toggleTheme} />
        <ul className={'nav__top--content' + (contentDisplay ? ' toggle-on bg-soft' : '')}>
          <li>
            <Link to="/" activeClassName="brown-color nav__top--active">
              <div className="nav-pin bg-brown"></div>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="brown-color nav__top--active">
              <div className="nav-pin bg-brown"></div>
              about
            </Link>
          </li>
          <li>
            <Link to="/categories" partiallyActive={true} activeClassName="brown-color nav__top--active">
              <div className="nav-pin bg-brown"></div>
              posts
            </Link>
          </li>
        </ul>
        <svg
          className={'medium-toggle' + (contentDisplay === true ? ' toggle-on' : '')}
          viewBox="0 0 100 100"
          onClick={contentToggleHandler}
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <line x1="10" y1="20" x2="90" y2="20" className="toggle__line--first" />
          <line x1="10" y1="50" x2="90" y2="50" className="toggle__line--second" />
          <line x1="10" y1="80" x2="90" y2="80" className="toggle__line--third" />
        </svg>
      </div>
      {contentDisplay && (
        <Portal>
          <PortalBg onClick={contentOff} className="invert"></PortalBg>
        </Portal>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: white;
  backdrop-filter: blur(20px);
  width: 100%;
  z-index: 10;
  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-weight: bold;

    .seventwo {
      font-size: 1.5rem;
    }
  }

  .nav__top--logo {
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .nav__top--right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav__top--content {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-left: 0.3rem;
    }
    a {
      position: relative;
      padding: 0.3em;

      .nav-pin {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        transition: 0.4s;
        transform-origin: left;
        transform: scaleX(0);
      }

      &:hover {
        .nav-pin {
          transform: scaleX(1);
        }
      }
    }
  }

  .nav__top--active {
    color: #777 !important;
    &:hover {
      cursor: default;
    }
    .nav-pin {
      display: none;
    }
  }

  .medium-toggle {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.size.medium}) {
    .seventwo {
      font-size: 1.2rem !important;
    }
    .nav__top--content {
      position: absolute;
      z-index: 2;
      top: 100%;
      left: 0;
      width: 100%;
      height: 0px;
      overflow: hidden;
      display: block;
      transition: 0.4s;

      li {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        a {
          width: 100%;
          padding: 1rem;
          text-align: center;
        }
      }

      &.toggle-on {
        height: calc(9rem);
      }
    }
    .medium-toggle {
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 0.5rem;

      line {
        stroke-width: 8;
        stroke-linecap: round;
        transition: 0.4s;
      }
      .toggle__line--first {
        transform-origin: center 20%;
      }
      .toggle__line--third {
        transform-origin: center 80%;
      }
      &:hover {
        cursor: pointer;
      }

      &.toggle-on {
        .toggle__line--second {
          opacity: 0;
        }
        .toggle__line--first {
          transform: translateY(30%) rotateZ(45deg);
        }
        .toggle__line--third {
          transform: translateY(-30%) rotate(-45deg);
        }
      }
    }
  }
`;

const PortalBg = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.3;
`;

export default TopNav;
