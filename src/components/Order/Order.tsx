import React from 'react';
import { Main } from '../Main/Main';
import { OrderActions } from './OrderActions';
import { OrderHeader } from './OrderHeader';
import { OrderTable } from './OrderTable';

export const Order = () => {
  return (
    <Main>
      <OrderActions />
      <OrderHeader />
      <OrderTable />
    </Main>
  );
};
