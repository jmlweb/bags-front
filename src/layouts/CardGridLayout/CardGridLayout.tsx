import React, { FC, ReactNode } from 'react';
import styled from '@xstyled/styled-components';

export interface Props {
  children: ReactNode;
}

const SGrid = styled.div`
  display: grid;
  grid-gap: 4;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const CardGridLayout: FC<Props> = ({ children }) => <SGrid>{children}</SGrid>;

export default CardGridLayout;
