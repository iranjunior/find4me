import React from 'react';
import { MdSearch } from 'react-icons/md';
import LogoIcon from '../../assets/logo.svg';

import { Container, Image } from './styles';

const decoratorIcons = (Component, props) => (
  <Container>
    <Component {...props} />
  </Container>
);
const decoratorSvg = (Component, props) => (<Image {...props} src={Component} />);

export const Search = (...props) => decoratorIcons(MdSearch, props);
export const Logo = (...props) => decoratorSvg(LogoIcon, props);
