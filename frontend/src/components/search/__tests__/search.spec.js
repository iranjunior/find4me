/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  render, mount,
} from 'enzyme';
import configureStore from 'redux-mock-store';
import Search from '../index';
import Payloads from './__payloads__/username.json';

let mockStore;

describe('Testes unitarios do Formulario', () => {
  beforeAll(() => {
    mockStore = configureStore([]);
  });

  it('Deve renderizar o componente sem erros', () => {
    const store = mockStore(Payloads.Success);
    const Wrapper = render(<Search store={store} />);
    expect(Wrapper.first()[0].tagName).toBe('form');
  });

  it('Deve renderizar o componente e clicar no submit', () => {
    const store = mockStore(Payloads.NoBody);
    const Wrapper = mount(<Search store={store} />);
    const mockSubmit = jest.fn(Wrapper.find('button').instance().onclick);
    mockSubmit(() => {});
    Wrapper.find('button').simulate('click');
    expect(mockSubmit).toHaveBeenCalled();
  });

  it('Deve renderizar o componente e mudar o texto do input', () => {
    const store = mockStore(Payloads.Success);
    const Wrapper = mount(<Search store={store} />);
    const mockChange = jest.fn(Wrapper.find('input').instance().onchange);
    mockChange(() => {});
    Wrapper.find('input').simulate('change');
    expect(mockChange).toHaveBeenCalled();
  });
});
