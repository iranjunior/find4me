/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Home from '../index';

import Payload from './__payloads__/home.json';

let mockStore;
describe('Testes unitarios da pagina de Home', () => {
  beforeAll(() => {
    mockStore = configureStore([]);
  });


  it('Deve renderizar o componente sem erros', () => {
    const store = mockStore(Payload.Success);
    const Wrapper = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(Wrapper[0].childNodes.length).toBe(2);
    expect(Wrapper[0].firstChild.firstChild.childNodes[0].data).toContain('Github');
    expect(Wrapper[0].lastChild.name).toBe('form');
  });
  it('Deve falhar devido o username esta errado', () => {
    const mockHistory = { push: jest.fn(() => {}) };
    const store = mockStore(Payload.Failed);
    try {
      render(
        <Provider store={store}>
          <Home history={mockHistory} />
        </Provider>,
      );
    } catch (error) {
      expect(error.message).toContain('username');
    }
  });
});
