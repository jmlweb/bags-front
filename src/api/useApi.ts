import { useReducer, useMemo } from 'react';
import { AxiosResponse } from 'axios';
import useApiService from './useApiService';

export interface State<T> {
  idle: boolean;
  data?: T;
  error?: string;
}

type Action<T> =
  | { type: 'start' }
  | { type: 'success'; payload: T }
  | { type: 'error'; error: string };

const initialState: State<any> = {
  idle: true,
  data: undefined,
  error: undefined,
};

const apiReducer = <T>(state: State<T>, action: Action<T>) => {
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
    () => async <T>(serviceCall: Promise<AxiosResponse<T>>) => {
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
      data: state.data,
      error: state.error,
      loading: !state.idle || (!state.data && !state.error),
    }),
    [makeRequest, service, state],
  );
};

export default useApi;
