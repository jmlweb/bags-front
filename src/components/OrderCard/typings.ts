import { ChangeEvent, FormEvent } from 'react';

export interface Props {
  userEmail: string;
  userName: string;
  bagsCount: number;
  orderId: string;
}

export type ViewProps = Omit<Props, 'bagsCount'> & {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  bagsValue: number;
  minBags: number;
  maxBags: number;
  loading: boolean;
  saved: boolean;
};

export type FooterProps = {
  bagsValue: number;
  minBags: number;
  maxBags: number;
  loading: boolean;
  saved: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  buttonDefaultText: string;
};
