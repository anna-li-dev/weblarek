import './scss/styles.scss';
import { apiProducts } from './utils/data';
import { ProductModel } from './components/models/ProductModel';
import { BasketModel } from './components/models/BasketModel';
import { CustomerModel } from './components/models/CustomerModel';
import { WebLarekApi } from './components/models/WebLarekApi'
import { Api } from './components/base/Api'
import { API_URL } from './utils/constants'

const productsModel = new ProductModel();
productsModel.setProducts(apiProducts.items);
console.log('Массив товаров из каталога: ', productsModel.getProducts());
console.log('Один товар: ', productsModel.getProductById(apiProducts.items[0].id));
productsModel.setSelectedProduct(apiProducts.items[0]);
console.log('Выбранный товар: ', productsModel.getSelectedProduct());

const basketModel = new BasketModel();
console.log('Корзина: ', basketModel.getItems());
basketModel.addItem(apiProducts.items[0]);
basketModel.addItem(apiProducts.items[1]);
basketModel.addItem(apiProducts.items[2]);
console.log('Товары в корзине: ', basketModel.getItems());
console.log('Сумма: ', basketModel.getTotal());
console.log('Количество: ', basketModel.getCount());
console.log('Проверка наличия товара: ', basketModel.hasItem(apiProducts.items[1].id));
console.log('Корзина, после удаления 1 товара: ', basketModel.removeItem(apiProducts.items[1]));
console.log('Пустая корзина. После удаления: ', basketModel.clear());

const customerModel = new CustomerModel();
customerModel.setField('payment', 'online');
customerModel.setField('address', 'Planet');
customerModel.setField('phone', '+19874561225');
customerModel.setField('email', 'testname@test.com');
console.log('Покупатель: ', customerModel.getData());
console.log('Ошибки: ', customerModel.validate());
customerModel.clear();
console.log('После очистки данных: ', customerModel.getData());
console.log('Ошибки: ', customerModel.validate());

const api = new Api(API_URL);
const weblarekApi = new WebLarekApi(api);
weblarekApi.getProducts()
  .then ( (data) => {
    console.log('Каталог товаров с сервера: ', data.items);

    productsModel.setProducts(data.items);
    console.log('Модель данных каталога: ', productsModel.getProducts());
  })
  .catch ( (error) => {
    console.error('Ошибка загрузки товаров: ', error);
  } )



