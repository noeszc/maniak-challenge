import React from 'react';
import styled from '@emotion/styled';
import { Link as ReachLink } from 'react-router-dom';
import { Heading, Link } from '@chakra-ui/core';
import BrandAsset from 'images/bellotero.svg';

// //////////////////////////////////////////////////////////////////////

const Brand = styled(Heading)`
  display: block;
  background: url(${BrandAsset}) no-repeat center center;
  background-size: contain;
  margin: 0;
`;

// //////////////////////////////////////////////////////////////////////

const Target = styled(Link)`
  display: block;
  background: transparent;
  text-indent: -9999999px;
  overflow: hidden;
`;

// //////////////////////////////////////////////////////////////////////

function Logo({ size = { width: '133px', height: '26px' }, ...rest }) {
  return (
    <Brand as="h1" {...size} {...rest}>
      <Target {...{ as: ReachLink, to: '/', ...size }}>Bellotero.io</Target>
    </Brand>
  );
}

export default Logo;
