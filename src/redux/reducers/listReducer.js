
const initialState = {
  data: [],
  loading: false,
  error: null,
  pollingId: null,
  polling: false,
  selectedRows: [],
  filterValues: undefined,
};

export const list = (namespace) => (state = initialState, action) => {
  switch (action.type) {
  
    case `${namespace}/LIST_REQUEST`: {
      
      return {...state, loading: true, error: null};
    }
    case `${namespace}/LIST_SUCCESS`: {

      return {...state, data: action?.data, loading: false};
    }
    case `${namespace}/LIST_FAILURE`: {
      return {...state, data: [], loading: false, error: action.error};
    }

    default:
      return state;
  }
};
