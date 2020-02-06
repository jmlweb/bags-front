import React, { ReactNode, FC } from 'react';
import styled from '@xstyled/styled-components';

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

export interface Props {
  headerContent: ReactNode;
  bodyContent: ReactNode;
}

const MainLayout: FC<Props> = ({ headerContent, bodyContent }) => (
  <SWrapper>
    <div>{headerContent}</div>
    <main>{bodyContent}</main>
  </SWrapper>
);

export default MainLayout;
