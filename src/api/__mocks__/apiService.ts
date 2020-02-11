import { OrderItem, UserItem } from '../../typings';
import { UserPayload } from '../apiService';

let counter = 322;

export type AxiosResponse<T> = {
  data: T;
};

class ApiService {
  public static create(): ApiService {
    return new ApiService();
  }

  private users: UserItem[] = [
    {
      _id: '123',
      name: 'José Manuel Lucas',
      email: 'josemanuel@jmlweb.es',
    },
    {
      _id: '321',
      name: 'Michael Jordan',
      email: 'michael@jordan.com',
    },
  ];

  private orders: OrderItem[] = [
    {
      _id: 'abc',
      bagsCount: 1,
      user: this.users[0],
    },
    {
      _id: 'cba',
      bagsCount: 5,
      user: this.users[1],
    },
  ];

  public getUsers(): Promise<AxiosResponse<UserItem[]>> {
    return Promise.resolve({
      data: this.users,
    });
  }

  public createUser(payload: UserPayload): Promise<AxiosResponse<UserItem>> {
    const newUser = {
      _id: (counter += 1).toString(),
      ...payload,
    };
    this.users.push(newUser);
    return Promise.resolve({
      data: newUser,
    });
  }

  public updateUser(
    userId: string,
    payload: UserPayload,
  ): Promise<AxiosResponse<UserItem | undefined>> {
    let updatedUser: UserItem | undefined;
    const newUsers = this.users.map(user => {
      if (user._id === userId) {
        updatedUser = {
          ...user,
          ...payload,
        };
        return updatedUser;
      }
      return user;
    });
    this.users = newUsers;
    return Promise.resolve({
      data: updatedUser,
    });
  }

  public getOrders(): Promise<AxiosResponse<OrderItem[]>> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          data: this.orders,
        });
      }, 500);
    });
  }

  public createOrder(payload: {
    user: string;
    bagsCount: number;
  }): Promise<AxiosResponse<OrderItem>> {
    const addedUser = this.users.find(v => v._id === payload.user);
    const newOrder = {
      _id: (counter += 1).toString(),
      bagsCount: payload.bagsCount,
      user: addedUser,
    };
    this.orders.push(newOrder as OrderItem);
    return Promise.resolve({
      data: newOrder as OrderItem,
    });
  }

  public updateOrder(
    orderId: string,
    payload: {
      bagsCount: number;
    },
  ): Promise<AxiosResponse<OrderItem | undefined>> {
    let updatedOrder: OrderItem | undefined;
    const newOrders = this.orders.map(order => {
      if (order._id === orderId) {
        updatedOrder = {
          ...order,
          ...payload,
        };
        return updatedOrder;
      }
      return order;
    });
    this.orders = newOrders;
    return Promise.resolve({
      data: updatedOrder,
    });
  }
}

export default ApiService;
