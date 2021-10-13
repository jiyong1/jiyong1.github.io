/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const React = require('react');

const SNBRootComponents = [<nav id="side__nav--bar"></nav>];

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(SNBRootComponents);
};
