import styled from '@emotion/styled';
import _ from 'lodash/fp';
import { Heading } from '@chakra-ui/core';

const H1 = styled(Heading)`
  display: inline-block;
  background-color: ${_.path('theme.colors.blue.300')};
  color: ${_.path('theme.colors.white')};
  font-weight: ${_.path('theme.fontWeights.black')};
  line-height: ${_.path('theme.lineHeights.none')};
  padding: ${_.path('theme.space.2')} ${_.path('theme.space.1')};
  letter-spacing: 0.77px;
`;

export default H1;
