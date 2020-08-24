import React from 'react';
import useLoadPage from 'containers/PagesManager/components/useLoadPage';
import Calculator from './components/Calculator';
import { SimpleGrid } from '@chakra-ui/core';

function ConfiguratorPage(props) {
  const state = useLoadPage();

  return (
    <SimpleGrid columns={2} spacing={6}>
      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
      <Calculator></Calculator>
    </SimpleGrid>
  );
}

export default ConfiguratorPage;
