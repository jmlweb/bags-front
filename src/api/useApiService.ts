import { useContext } from 'react';
import ApiContext from './ApiContext';

const useApiService = () => {
  return useContext(ApiContext);
};

export default useApiService;
