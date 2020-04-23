import types from '../constants/types';
import Api from './API';
import { getToken, setToken } from './storage';

export const handleClick = (history) => (keyword) => {
  history.push('/person', {
    keyword,
  });
};
export const handleFinded = (dispatch) => (payload) => {
  dispatch({
    type: types.CHANGE_KEYWORD,
    payload,
  });
  dispatch({
    type: types.CHANGE_SUGGESTIONS_KEYWORD,
    payload: [],
  });
};
export const handleSearch = (dispatch) => async (payload) => {
  dispatch({
    type: types.CHANGE_KEYWORD,
    payload,
  });
  if (payload.length > 2) {
    const { success, data } = await Api.getKeywords(payload);
    if (success) {
      dispatch({
        type: types.CHANGE_SUGGESTIONS_KEYWORD,
        payload: data.keywords,
      });
    }
  } else {
    dispatch({
      type: types.CHANGE_SUGGESTIONS_KEYWORD,
      payload: [],
    });
  }
};
export const handleAuthentication = (token = '') => {
  if (token.trim()) {
    setToken(token);
    return true;
  }
  const prevToken = getToken();
  if (prevToken.trim()) {
    return true;
  }
  return false;
};
export const handlePersons = async (keyword) => {
  const response = await Api.getUserForKeywords(keyword);
  if (response.success) {
    return {
      data: response.data,
      err: null,
    };
  }
  if (response.status === 401) {
    return {
      err: 401,
      data: null,
    };
  }
  return {
    err: response.status,
    data: null,
  };
};
export const handleFocus = (setActive, keyword) => (focus) => {
  if (keyword.length === 0) {
    setActive(!focus);
  }
};
