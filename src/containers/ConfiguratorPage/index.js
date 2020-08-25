import _ from 'lodash';
import React from 'react';
import { SimpleGrid, Spinner, Stack, Text, Box } from '@chakra-ui/core';

import H1 from 'components/elements/H1';
import useLoadPage from 'containers/PagesManager/components/useLoadPage';
import Calculator from './components/Calculator';
import { splitWordByDomain } from './components/helpers';

function ConfiguratorPage() {
  const { loading, value } = useLoadPage();

  if (loading || _.isEmpty(value)) {
    return <Spinner alignSelf="center" m="auto"></Spinner>;
  }

  const headings = splitWordByDomain(_.get(value, 'calculator.title', ''));

  return (
    <SimpleGrid columns={2} spacing={'216px'} paddingTop={32}>
      <Box>
        <Stack shouldWrapChildren spacing="4px" mb={8}>
          <H1>{headings[0]}</H1>
          <H1 as="h3">{headings[1]}</H1>
        </Stack>
        <Text>{value.calculator.description}</Text>
      </Box>
      <Calculator defaultIngredient={10} defaultFullTime={1}></Calculator>
    </SimpleGrid>
  );
}

export default ConfiguratorPage;
