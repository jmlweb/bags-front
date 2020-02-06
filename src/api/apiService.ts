// TODO: Separate API Service and API Adapter
import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { OrderItem } from '../typings';

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

  public getOrders(): Promise<AxiosResponse<OrderItem>> {
    return this.instance.get('/order');
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
