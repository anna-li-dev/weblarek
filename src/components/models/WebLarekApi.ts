import {IApi, IProductListResponse, IOrderRequest, IOrderResponse} from '../../types/index'

export class WebLarekApi {
  private api: IApi

  constructor(api: IApi) {
    this.api = api
  }

  getProducts(): Promise<IProductListResponse> {
    return this.api.get('/api/weblarek/product/');
  }

  createOrder(data: IOrderRequest): Promise<IOrderResponse> {
    return this.api.post('/api/weblarek/order', data)
  }
}
