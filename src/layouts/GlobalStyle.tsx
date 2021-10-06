import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
    transition: .4s;
  }
  button {
    border: none;
    background: none;
    margin: 0;
    padding: 0;
    color: inherit;
    font: inherit;
    &:hover {
      cursor: pointer;
    }
    &:disabled {
      opacity: 0.6;
    }
  }
  input,
  button,
  select,
  textarea {
    &:focus {
      outline: none;
    }
  }
  :root {
    --bg-black: #222;
    --soft-black: #444;
    --soft-white: #fcfcf7;
    --white-foundation: rgba(252, 252, 247, 0.3);
    --black-foundation: rgba(68, 68, 68, 0.3);
  }
  #portal {
    position: fixed;
    top: 0;
    left: 0;
  }
  body.light {
    background-color: white;
    color: black;
    .bg-foundation {
      background-color: var(--white-foundation);
    }
    .bg-soft {
      background-color: var(--soft-white);
      border-color: var(--soft-black);
    }
    .invert {
      color: white;
      background-color: var(--bg-black);
    }
    .invert-soft {
      background-color: var(--soft-black);
      border-color: var(--soft-white);
    }
    svg * {
      stroke: var(--bg-black);
    }
    .brown-color {
      color: #885838;
    }
    .bg-brown {
      background-color: #885838;
    }
    a:hover {
      color: #885838;
    }
  }
  body.dark {
    background-color: var(--bg-black);
    color: white;
    .bg-foundation {
      background-color: var(--black-foundation);
    }
    .bg-soft {
      background-color: var(--soft-black);
      border-color: var(--soft-white);
    }
    .invert {
      color: var(--bg-black);
      background-color: white;
    }
    .invert-soft {
      background-color: var(--soft-white);
      border-color: var(--soft-black);
    }
    svg * {
      stroke: var(--soft-white);
    }
    .brown-color {
      color: #fbf1c8;
    }
    .bg-brown {
      background-color: #fbf1c8;
    }

    a:hover {
      color: #fbf1c8;
    }
  }
`;

export default GlobalStyle;
