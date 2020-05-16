import types from '../constants/types';
import Api from './API';
import {
  getToken, setToken, setUser, getUser, clearUser, clearToken,
} from './storage';
import { isEmail, isPassword } from './utils/checkValues';

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
export const handleCheckFieldsLogin = (setInvalid) => (e) => {
  e.preventDefault();
  const [{ value: email }] = e.target;
  if (!isEmail(email)) {
    setInvalid((prev) => ({
      ...prev,
      email: true,
    }));
    e.stopPropagation();
  } else {
    setInvalid((prev) => ({
      ...prev,
      email: false,
    }));
  }
};
export const handleLogin = (setErrorLogin, closeModal = () => {}) => async (e) => {
  e.preventDefault();
  const [{ value: email }, { value: password }] = e.target;
  const { success, data: { token, ...user } } = await Api.signIn({
    email,
    password,
  });
  if (success) {
    clearUser();
    clearToken();
    setUser(user);
    setToken(token);
    closeModal();
  } else {
    setErrorLogin(true);
  }
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

export const handlePersons = (keyword) => new Promise((resolve, reject) => {
  Api.getUserForKeywords(keyword).then((res) => {
    if (res.success) {
      resolve({ status: res.status, data: res.data });
    } else {
      reject(new Error(JSON.stringify({ status: res.status, error: res.error })));
    }
  });
});
export const handleFocus = (setActive, keyword) => (focus) => {
  if (keyword.length === 0) {
    setActive(!focus);
  }
};

export const handleUserModal = (setIsOpen, setContentModal, setUserModal, content, user) => () => {
  setContentModal(content);
  setUserModal(user);
  setIsOpen(true);
};
export const handleResults = (setOpen, setSearching, dispatch, keyword) => {
  const isAuthenticated = handleAuthentication();
  if (!isAuthenticated) {
    setOpen(true);
  }
  setSearching(true);
  handlePersons(keyword).then(({ data }) => {
    dispatch({
      type: types.CHANGE_SEARCH_RESULTS,
      payload: data,
    });
    setSearching(false);
  }).catch((err) => {
    if (err.status === 401) {
      setOpen(true);
    }
    console.error('Erro get users: ', err.error);
    dispatch({
      type: types.CHANGE_SEARCH_RESULTS,
      payload: [],
    });
    setSearching(false);
  });
};
