import React from 'react';
import { Box } from '@chakra-ui/core';

import Container from 'components/elements/Container';
import Logo from './Logo';
import Nav from './Nav';

function Header({ items, ...rest }) {
  return (
    <Box as="header" bg="white">
      <Container
        {...{
          as: 'nav',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 16,
        }}
      >
        <Logo></Logo>
        <Nav items={items}></Nav>
      </Container>
    </Box>
  );
}

export default Header;
