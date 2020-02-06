import { createContext } from 'react';
import ApiService from './apiService';

const Context = createContext((null as unknown) as ApiService);

export default Context;
