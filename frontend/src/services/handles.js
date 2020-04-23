import types from '../constants/types';
import Api from './API';

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
export const handleFocus = (setActive, keyword) => (focus) => {
  if (keyword.length === 0) {
    setActive(!focus);
  }
};
