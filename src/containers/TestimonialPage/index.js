import _ from 'lodash';
import React from 'react';
import { Spinner, Box, Flex } from '@chakra-ui/core';

import useLoadPage from 'containers/PagesManager/components/useLoadPage';
import H1 from 'components/elements/H1';
import Rotator from './Rotator';

function TestimonialPage() {
  const { loading, value } = useLoadPage();

  if (loading || _.isEmpty(value)) {
    return <Spinner alignSelf="center" m="auto"></Spinner>;
  }

  const items = _.get(value, 'slider.reviews');

  return (
    <Box paddingTop={32}>
      <H1>{_.get(value, 'slider.title')}</H1>
      <Rotator mt={20} items={items} max={items.length - 1}></Rotator>
    </Box>
  );
}

export default TestimonialPage;
