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
    position: relative;
    &::before {
      display: block;
      content: '';
      width: 0;
      height: 4px;
      position: absolute;
      top: calc(-2em + 8px); // 0 + offset(h*2)
      background: transparent;
      transition: all 150ms ease-in;
    }
    &:hover,
    &.active {
      text-decoration: none;
      &:before {
        width: 100%;
        background: ${({ theme }) => _.get(theme, 'colors.blue.300')};
      }
    }
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
        align: 'center',
      }}
      {...rest}
    >
      <LinkWrapper>
        <NavLink exact to={'/'}>
          Home
        </NavLink>
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
