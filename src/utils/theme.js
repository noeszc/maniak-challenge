import deepmerge from 'deepmerge';
import { theme as defaultTheme } from '@chakra-ui/core';

const colors = {
  white: '#fff',
  black: '#161616',
  blue: {
    50: '#f9faff',
    300: '#071eb3',
  },
};

const theme = deepmerge(defaultTheme, { colors });

export default theme;
