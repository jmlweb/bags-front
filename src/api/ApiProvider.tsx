import React, { FC, ReactNode } from 'react';

import ApiContext from './ApiContext';
import ApiService from './apiService';

export interface Props {
  url: string;
  children: ReactNode;
}

const ApiProvider: FC<Props> = ({ url, children }) => {
  const api = ApiService.create(url);
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
