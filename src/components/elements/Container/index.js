import React from 'react';
import { Box } from '@chakra-ui/core';

function Container({ children, isFluid, ...rest }) {
  return (
    <Box
      {...{
        position: 'relative',
        width: '100%',
        maxWidth: '1024px',
        marginX: 'auto',
        paddingX: 4,
        ...(isFluid && { maxWidth: '100%' }),
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export default Container;
