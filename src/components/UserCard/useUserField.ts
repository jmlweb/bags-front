import { useState, ChangeEvent } from 'react';
import { validateName } from '../../utils';

export type HandleFn = (e: ChangeEvent<HTMLInputElement>) => void;

export type UserFieldProps = {
  value: string;
  error: string;
  handleChange: HandleFn;
  handleBlur: HandleFn;
};

const useUserField = (initialValue: string, isEmail: boolean = false) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const handleChange: HandleFn = e => {
    setValue(e.target.value);
  };
  const handleBlur: HandleFn = e => {
    if (!isEmail && !validateName(value)) {
      setError('You must introduce a valid name');
    } else if (!value.length) {
      setError('You must introduce a valid email');
    }
  };
  return {
    value,
    error,
    handleChange,
    handleBlur,
  };
};

export default useUserField;
