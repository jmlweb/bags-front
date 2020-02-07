import React, {
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
  ChangeEvent,
} from 'react';

import { useApi } from '../../api';
import { UserItem } from '../../typings';

export interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const OrderCardUserSelector: FC<Props> = ({ value, setValue }) => {
  const { service, makeRequest, loading, data } = useApi();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setValue(e.target.value);
  };

  useEffect(() => {
    makeRequest(service.getUsers());
  }, [makeRequest, service]);

  useEffect(() => {
    if (data) {
      setValue((data as UserItem[])[0]._id);
    }
  }, [data, setValue]);

  if (loading) {
    return (
      <select>
        <option>Loading...</option>
      </select>
    );
  }
  return (
    <select onChange={handleChange} value={value}>
      {(data as UserItem[]).map(item => (
        <option key={item._id} value={`${item._id}`}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default OrderCardUserSelector;
