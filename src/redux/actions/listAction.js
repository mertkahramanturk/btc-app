import { get } from '../../utils/api/index'

function request(namespace) {
  return {
    type: `${namespace}/LIST_REQUEST`,
  };
}

function success(namespace, data) {
  return {
    type: `${namespace}/LIST_SUCCESS`,
    data,
  };
}

function failure(namespace, error) {
  return {
    type: `${namespace}/LIST_FAILURE`,
    error,
  };
}


export const fetchList = (namespace, storeVariable = undefined) => async (dispatch, getState) => {

  try {
   
    setInterval(async () => {
      dispatch(request(namespace));
      const res = await get(`${namespace}`);
      if (res.data.errorCode) {
        dispatch((res.data.errorCode, 'error'));
      } else {
        dispatch(success(namespace, res.data));
      }
    }, 2000)
  } catch (error) {
    dispatch(failure(namespace, error));
    if (error.response !== undefined) {
      dispatch((error.response.status, 'error'));
    } else {
      dispatch(('500', 'error'));
    }
    throw error;
  }
}


