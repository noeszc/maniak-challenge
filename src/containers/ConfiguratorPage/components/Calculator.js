import _ from 'lodash/fp';
import React from 'react';
import {
  Box,
  Stack,
  InputGroup,
  Input,
  InputLeftElement,
  Text,
} from '@chakra-ui/core';
import styled from '@emotion/styled';
import numeral from 'numeral';

import Slider from 'components/modules/Slider';
import useHandlers from './useHandlers';

// //////////////////////////////////////////////////////////////////////

const DigitsInput = styled(Input)`
  color: ${_.path('theme.colors.black')};
  font-weight: ${_.path('theme.fontWeights.medium')};
  font-size: ${_.path('theme.fontSizes.4xl')};
  text-align: right;
  height: ${_.path('theme.space.12')};
  &:read-only {
    background-color: white;
  }
`;

DigitsInput.defaultProps = { readOnly: true };

// //////////////////////////////////////////////////////////////////////

const InputAddon = styled(InputLeftElement)`
  height: ${_.path('theme.space.12')};
  font-size: ${_.path('theme.fontSizes.2xl')};
  color: ${_.path('theme.colors.black')};
  opacity: 0.24;
`;

// //////////////////////////////////////////////////////////////////////

const Label = styled(Text)`
  display: block;
  font-size: ${_.path('theme.fontSizes.sm')};
  font-weight: ${_.path('theme.fontWeights.bold')};
  color: ${_.path('theme.colors.black')};
  letter-spacing: normal;
`;

// //////////////////////////////////////////////////////////////////////

const Saving = styled(Text)`
  color: ${_.path('theme.colors.blue.300')};
  font-size: ${_.path('theme.fontSizes.6xl')};
  font-weight: ${_.path('theme.fontWeights.medium')};
  letter-spacing: 1px;
  line-height: ${_.path('theme.lineHeights.none')};
  margin-bottom: ${_.path('theme.spacing.2')};
  text-align: center;
  > span:first-of-type {
    font-size: ${_.path('theme.fontSizes.4xl')};
  }
`;

// //////////////////////////////////////////////////////////////////////

const InlineStack = styled(Stack)`
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: ${_.path('theme.spacing.4')};
`;

InlineStack.defaultProps = { isInline: true };

// //////////////////////////////////////////////////////////////////////

const Calculator = ({ defaultIngredient, defaultFullTime, ...rest }) => {
  const {
    annualSaving,
    ingredientSpending,
    fullTimeEmployees,
    handleIngridients,
    handleEmployees,
    foodCostSaving,
  } = useHandlers({
    ingredientSpending: defaultIngredient,
    fullTimeEmployees: defaultFullTime,
  });

  return (
    <Box {...rest}>
      <Stack spacing={12} mb={16}>
        <Box>
          <InlineStack mb={4}>
            <Label>
              Monthly <br /> ingredient spending
            </Label>
            <InputGroup>
              <InputAddon>$</InputAddon>
              <DigitsInput w="32" value={ingredientSpending}></DigitsInput>
            </InputGroup>
          </InlineStack>
          <Slider
            {...{
              defaultValue: ingredientSpending,
              min: 10,
              max: 100,
              onChange: handleIngridients,
            }}
          />
        </Box>
        <Box>
          <InlineStack mb={4}>
            <Label>
              Full-time employees that <br />
              process invoices
            </Label>
            <InputGroup>
              <DigitsInput w="20" value={fullTimeEmployees}></DigitsInput>
            </InputGroup>
          </InlineStack>
          <Slider
            {...{
              defaultValue: fullTimeEmployees,
              min: 1,
              max: 10,
              onChange: handleEmployees,
            }}
          />
        </Box>
      </Stack>
      <InlineStack>
        <Saving>
          <Text as="span">$</Text>
          {numeral(foodCostSaving).format('(0.00 a)')}
          <Label as="span">Estimated cost food savings</Label>
        </Saving>
        <Saving>
          <Text as="span">$</Text>
          {numeral(annualSaving).format('(0.00 a)')}
          <Label as="span">Your estimated annual savings</Label>
        </Saving>
      </InlineStack>
    </Box>
  );
};

export default Calculator;
