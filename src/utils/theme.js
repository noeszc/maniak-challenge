import deepmerge from 'deepmerge';
import { theme as defaultTheme } from '@chakra-ui/core';

// //////////////////////////////////////////////////////////////////////

const colors = {
  white: '#fff',
  black: '#161616',
  blue: {
    50: '#f9faff',
    100: '#f0f2ff',
    300: '#071eb3',
  },
};

// //////////////////////////////////////////////////////////////////////

const fonts = {
  heading: `'Roboto', sans-serif`,
  body: `'Roboto', sans-serif`,
};

// //////////////////////////////////////////////////////////////////////

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
};

// //////////////////////////////////////////////////////////////////////

const theme = deepmerge(defaultTheme, { colors, fonts, fontWeights });

export default theme;
