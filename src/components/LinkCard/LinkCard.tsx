import React, { FC, ReactNode } from 'react';
import styled from '@xstyled/styled-components';
import { Link } from 'react-router-dom';

import Card from '../Card';

const SLink = styled(Link)`
  display: block;
  text-decoration: none;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 4;
`;

export interface Props {
  to: string;
  children: ReactNode;
}

const LinkCard: FC<Props> = ({ to, children }) => (
  <Card>
    <SLink to={to}>{children}</SLink>
  </Card>
);

export default LinkCard;
