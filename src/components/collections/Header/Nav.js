import _ from 'lodash';
import React from 'react';
import styled from '@emotion/styled';
import { List, ListItem, Stack, Link } from '@chakra-ui/core';
import { NavLink } from 'react-router-dom';

// //////////////////////////////////////////////////////////////////////

const LinkWrapper = styled(ListItem)`
  > a {
    display: block;
    font-weight: 500;
    letter-spacing: 0.3px;
    font-size: 14px;
    color: ${({ theme }) => _.get(theme, 'colors.blue.300')};
  }
`;

// //////////////////////////////////////////////////////////////////////

const LinkItem = ({ route, label, ...rest }) => {
  const { Component, props } = _.cond([
    [
      (url) => url.indexOf('#') !== -1,
      _.constant({
        Component: Link,
        props: {
          href: route,
          onClick: (e) => {
            e.preventDefault();
          },
        },
      }),
    ],
    [_.stubTrue, _.constant({ Component: NavLink, props: { to: route } })],
  ])(route);

  return (
    <Component {...props} {...rest}>
      {label}
    </Component>
  );
};

// //////////////////////////////////////////////////////////////////////

function Nav({ items, ...rest }) {
  return (
    <Stack
      {...{
        as: List,
        isInline: true,
        spacing: '58px',
      }}
      {...rest}
    >
      <LinkWrapper>
        <NavLink to={'/'}>Home</NavLink>
      </LinkWrapper>
      {_.map(items, ({ id, route, text }) => (
        <LinkWrapper key={`nav-item-${id}`}>
          <LinkItem {...{ route, label: text }}></LinkItem>
        </LinkWrapper>
      ))}
    </Stack>
  );
}

export default Nav;
