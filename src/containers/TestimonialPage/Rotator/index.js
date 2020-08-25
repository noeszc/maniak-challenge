import _ from 'lodash/fp';
import React from 'react';
import { useCounter } from 'react-use';
import { IconButton, Stack, Box, Text } from '@chakra-ui/core';
import styled from '@emotion/styled';

// //////////////////////////////////////////////////////////////////////

const ArrowButton = styled(IconButton)`
  color: ${_.path('theme.colors.white')};
  background-color: ${_.path('theme.colors.blue.300')};
  text-align: center;
`;

ArrowButton.defaultProps = { variant: 'unstyled', rounded: false, size: 'lg' };

// //////////////////////////////////////////////////////////////////////

const Stats = styled(Text)`
  display: flex;
  color: ${_.path('theme.colors.white')};
  background-color: ${_.path('theme.colors.blue.300')};
  font-family: ${_.path('theme.fonts.mono')};
  font-size: ${_.path('theme.fontSizes.2xl')};
  width: 120px;
  align-items: center;
  justify-content: center;
`;

Stats.defaultProps = { as: 'span' };

// //////////////////////////////////////////////////////////////////////

const Frame = styled(Stack)`
  background-color: ${_.path('theme.colors.white')};
  padding: ${_.path('theme.space.8')};
  max-width: ${_.path('theme.sizes.5xl')};
  position: relative;
`;

Frame.defaultProps = { isInline: true };

// //////////////////////////////////////////////////////////////////////

const Comment = styled(Text)`
  flex: 2;
  color: ${_.path('theme.colors.black')};
  font-weight: ${_.path('theme.fontWeights.bold')};
  font-size: ${_.path('theme.fontSizes.2xl')};
`;

// //////////////////////////////////////////////////////////////////////

const NavigationWrapper = styled(Stack)`
  position: absolute;
  right: 0;
  bottom: -${_.path('theme.space.6')};
  transform: translateX(50%);
`;

NavigationWrapper.defaultProps = { isInline: true, spacing: '1px' };

// //////////////////////////////////////////////////////////////////////

function useRotator(max, min = 0) {
  let [value, { inc, dec }] = useCounter(0, max, min);

  const state = {
    value,
    active: ++value,
    count: ++max,
    onSlideNext: () => inc(1),
    onSlidePrev: () => dec(1),
  };

  return state;
}

// //////////////////////////////////////////////////////////////////////

function Rotator({ items, ...rest }) {
  const { onSlideNext, onSlidePrev, active, count, value } = useRotator(
    items.length - 1,
  );

  const { comment, name, position } = items[value];
  return (
    <Box pos="relative" {...rest}>
      <Frame>
        <Box flex={1}>
          <Text fontSize="2rem" fontWeight="bold">
            {name}
          </Text>
          <Text color="gray.100" fontSize="sm">
            {position}
          </Text>
        </Box>
        <Comment children={comment}></Comment>
      </Frame>
      <NavigationWrapper>
        <Stats>
          {active} / {count}
        </Stats>
        <Box>
          <ArrowButton icon="arrow-back" onClick={onSlidePrev}></ArrowButton>
          <ArrowButton icon="arrow-forward" onClick={onSlideNext}></ArrowButton>
        </Box>
      </NavigationWrapper>
    </Box>
  );
}

export default Rotator;
