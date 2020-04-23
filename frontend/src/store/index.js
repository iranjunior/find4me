/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
import types from '../constants/types';

import { set, get, clear } from '../services/storage';

const dataStorage = get();
const cleanState = {
  keyword: '',
};

function saveState(newState) {
  set(newState);
  return newState;
}

function logout() {
  clear();
  return cleanState;
}

export const initialState = dataStorage || cleanState;

export const Context = React.createContext();

const actionMap = {
  [types.CHANGE_KEYWORD]: (state, payload) => saveState({ ...state, keyword: payload }),
  /* [types.SET_TOKEN]: (state, { token }) => saveState({
     ...state, auth: { ...state.auth, token } }),
  [types.SET_DECLARATION]: (state, payload) => saveState({ ...state, declaration: payload }),
  [types.SET_HEALTHCHECK]: (state, payload) => saveState({ ...state, health: payload }),
  [types.SET_DONATION]: (state, payload) => ({
      ...state,
      donation: payload,
    }), */
  [types.SET_LOGOUT]: () => logout(),
};

export function reducer(state, action) {
  console.log(`Store reducer is called with action ${action.type}`);
  return actionMap[action.type] ? actionMap[action.type](state, action.payload) : state;
}

export function connect(Component) {
  return function ConnectedComponent(props) {
    const { store, dispatch } = useContext(Context);
    return <Component store={store} dispatch={dispatch} {...props} />;
  };
}
