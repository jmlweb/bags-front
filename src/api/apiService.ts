// TODO: Separate API Service and API Adapter
import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { OrderItem, UserItem } from '../typings';

export interface UserPayload {
  name: string;
  email: string;
}

class ApiService {
  public static create(url: string): ApiService {
    return new ApiService(url);
  }

  private instance: AxiosInstance;

  constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
    });
  }

  public getUsers(): Promise<AxiosResponse<UserItem>> {
    return this.instance.get('/user');
  }

  public createUser(payload: UserPayload): Promise<AxiosResponse<UserItem>> {
    return this.instance.post('/user', payload);
  }

  public updateUser(
    userId: string,
    payload: UserPayload,
  ): Promise<AxiosResponse<UserItem>> {
    return this.instance.put(`/user/${userId}`, payload);
  }

  public getOrders(): Promise<AxiosResponse<OrderItem>> {
    return this.instance.get('/order');
  }

  public createOrder(payload: {
    user: string;
    bagsCount: number;
  }): Promise<AxiosResponse<OrderItem>> {
    return this.instance.post('/order', payload);
  }

  public updateOrder(
    orderId: string,
    payload: {
      bagsCount: number;
    },
  ): Promise<AxiosResponse<OrderItem>> {
    return this.instance.put(`/order/${orderId}`, payload);
  }
}

export default ApiService;
