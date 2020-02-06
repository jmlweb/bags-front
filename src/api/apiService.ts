// TODO: Separate API Service and API Adapter
import axios, { AxiosInstance, AxiosResponse } from 'axios';

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

  public getOrders(): Promise<AxiosResponse<any>> {
    const orders = this.instance.get('/order');
    return orders;
  }
}

export default ApiService;
