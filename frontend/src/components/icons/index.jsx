import React, { memo } from 'react';
import { MdSearch, MdClose } from 'react-icons/md';
import LogoSvg from '../../assets/logo.svg';

import { Container, Image } from './styles';

const decoratorIcons = (Component, props) => (
  <Container>
    <Component {...props} />
  </Container>
);
const decoratorSvg = (Component, props) => (<Image {...props} src={Component} />);

const SearchIcon = (...props) => decoratorIcons(MdSearch, props);
const CloseIcon = (...props) => decoratorIcons(MdClose, ...props);
const LogoIcon = (...props) => decoratorSvg(LogoSvg, props);

export const Search = memo(SearchIcon);
export const Close = memo(CloseIcon);
export const Logo = memo(LogoIcon);
