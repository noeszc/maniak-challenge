import _ from 'lodash';
import React from 'react';
import {
  Slider as Wrapper,
  SliderFilledTrack,
  SliderTrack,
  SliderThumb,
} from '@chakra-ui/core';
import styled from '@emotion/styled';

// //////////////////////////////////////////////////////////////////////

const Track = styled(SliderTrack)`
  background-color: ${({ theme }) => _.get(theme, 'colors.blue.100')};
`;

// //////////////////////////////////////////////////////////////////////

const FilledTrack = styled(SliderFilledTrack)`
  background-color: ${({ theme }) => _.get(theme, 'colors.blue.300')};
`;

// //////////////////////////////////////////////////////////////////////

const Thumb = styled(SliderThumb)`
  width: 16px;
  height: 16px;
  border: 5px solid;
  border-color: ${({ theme }) => _.get(theme, 'colors.blue.300')};
  box-shadow: 0 2px 8px 0 rgba(7, 30, 179, 0.24);
`;

// //////////////////////////////////////////////////////////////////////

function Slider(props) {
  return (
    <Wrapper {...props}>
      <Track></Track>
      <FilledTrack></FilledTrack>
      <Thumb></Thumb>
    </Wrapper>
  );
}

export default Slider;
