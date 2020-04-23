import types from '../constants/types';

export const handleClick = (history) => (keyword) => {
  history.push('/person', {
    keyword,
  });
};
export const handleSearch = (dispatch) => (payload) => {
  dispatch({
    type: types.CHANGE_KEYWORD,
    payload,
  });
};
export const handleFocus = (setActive, keyword) => (focus) => {
  if (keyword.length === 0) {
    setActive(!focus);
  }
};
