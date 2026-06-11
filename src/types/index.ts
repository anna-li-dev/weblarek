export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

export interface IApi {
    get<T extends object>(uri: string): Promise<T>;
    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

export interface IProduct {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
}

export type TPayment = "online" | "cash";

export interface IBuyer {
  payment: TPayment;
  email: string;
  phone: string;
  address: string;
}

// ответ сервера при получении каталога товаров.
export interface IProductListResponse {
  total: number;
  items: IProduct[];
}

// данные заказа, отправляемые на сервер
export interface IOrderRequest {
  payment: TPayment | null;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: string[]
}

// ответ сервера после успешного оформления заказа
export interface IOrderResponse {
  id: string;
  total: number;
}


