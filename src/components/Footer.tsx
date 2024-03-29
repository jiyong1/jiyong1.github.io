import React from 'react';
import styled from 'styled-components';

const Footer = (): JSX.Element => {
  return <FooterWrapper className="bg-normal">© seventwo | Powered by Github Pages</FooterWrapper>;
};

const FooterWrapper = styled.footer`
  width: 100%;
  font-size: 0.9rem;
  padding: 3em 1em;
  text-align: center;
  color: #777;
  margin-top: 100px;
  border-top: 1px solid #bbb;
  position: relative;
  z-index: 10;
`;

export default Footer;
