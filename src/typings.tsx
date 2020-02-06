export interface OrderItem {
  _id: string;
  bagsCount: number;
  user: {
    _id: string;
    name: string;
    email: string;
  };
}
