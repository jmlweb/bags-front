import { useState, ChangeEvent } from 'react';

import { Props, ViewProps } from './typings';

export type Params = Pick<ViewProps, 'maxBags' | 'minBags'> &
  Pick<Props, 'bagsCount'>;

const useBagsFields = ({ bagsCount, maxBags, minBags }: Params) => {
  const [bagsValue, setBagsValue] = useState(bagsCount);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBagsValue(Number(e.target.value));
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = Number(e.target.value);
    if (newValue > maxBags) {
      newValue = maxBags;
    } else if (newValue < minBags) {
      newValue = minBags;
    }
    setBagsValue(newValue);
  };
  return {
    bagsValue,
    handleChange,
    handleBlur,
  };
};

export default useBagsFields;
