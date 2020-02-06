import { useReducer, useMemo } from 'react';
import { AxiosResponse } from 'axios';
import useApiService from './useApiService';

export interface State {
  idle: boolean;
  data?: {}[];
  error?: string;
}

type Action =
  | { type: 'start' }
  | { type: 'success'; payload: {}[] }
  | { type: 'error'; error: string };

const initialState: State = {
  idle: true,
  data: undefined,
  error: undefined,
};

const apiReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'start':
      return { idle: false };
    case 'success':
      return { idle: true, data: action.payload, error: undefined };
    case 'error':
      return { idle: true, data: undefined, error: action.error };
    default:
      return state;
  }
};

const useApi = () => {
  const service = useApiService();
  const [state, dispatch] = useReducer(apiReducer, initialState);

  // This function uses "useMemo" to avoid re-renders
  const makeRequest = useMemo(
    () => async (serviceCall: Promise<AxiosResponse<any>>) => {
      dispatch({ type: 'start' });
      try {
        const { data } = await serviceCall;
        dispatch({ type: 'success', payload: data });
      } catch (error) {
        dispatch({ type: error, error: error.message });
      }
    },
    [],
  );

  // The returned object is also memoized to avoid re-renders
  return useMemo(
    () => ({
      makeRequest,
      service,
      ...state,
    }),
    [makeRequest, service, state],
  );
};

export default useApi;
