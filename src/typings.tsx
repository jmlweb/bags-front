export interface UserItem {
  _id: string;
  name: string;
  email: string;
}

export interface OrderItem {
  _id: string;
  bagsCount: number;
  user: UserItem;
}
