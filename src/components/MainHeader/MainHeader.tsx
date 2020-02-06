import React from 'react';
import styled from '@xstyled/styled-components';

import MainHeaderNav from './MainHeaderNav';

const SWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3 4;
`;

const STitle = styled.h1`
  font-size: 5;
  font-family: secondary;
  font-weight: 700;
  color: primary;
`;

const MainHeader = () => (
  <SWrapper>
    <STitle>Bags service</STitle>
    <MainHeaderNav />
  </SWrapper>
);

export default MainHeader;
