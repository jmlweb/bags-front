import React, { FC } from 'react';
import styled from '@xstyled/styled-components';
import { Link } from 'react-router-dom';

export interface Props {
  userEmail: string;
  userName: string;
  bagsCount: number;
  editLink: string;
}

const SCard = styled.article`
  background-color: #fff;
  padding: 4;
  box-shadow: 0 3px 16px rgba(122, 122, 122, 0.3), 0 1px 5px rgba(0, 0, 0, 0.1);
`;

const STitle = styled.h2`
  color: primaryTinted;
  margin: 0;
`;

const SSubtitle = styled.p`
  margin: 1 0 0;
`;

const SFooter = styled.footer`
  display: flex;
  margin-top: auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 3;
`;

const SBags = styled.p`
  margin: 0;
  color: primary;
  font-size: 20px;
  & strong {
    font-family: secondary;
  }
`;

const OrderCard: FC<Props> = ({ userEmail, userName, bagsCount, editLink }) => (
  <SCard>
    <STitle>{userName}</STitle>
    <SSubtitle>
      <a href={`mailto:${userEmail}`}>{userEmail}</a>
    </SSubtitle>
    <SFooter>
      <SBags title={`${bagsCount} bags`}>
        <strong>{bagsCount}</strong>{' '}
        <span role="img" aria-label="bags emoji">
          🧳
        </span>
      </SBags>
      <Link to={editLink}>Modify</Link>
    </SFooter>
  </SCard>
);

export default OrderCard;
