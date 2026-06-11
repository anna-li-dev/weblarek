import {IBuyer, TPayment} from '../../types/index'

export class CustomerModel {
  private payment: TPayment | null = null;
  private address: string = '';
  private phone: string = '';
  private email: string = '';


  setField(field: keyof IBuyer, value: IBuyer[keyof IBuyer]): void {
    (this as any)[field] = value;
  }

  getData(): IBuyer {
    return {
      payment: this.payment as TPayment,
      address: this.address,
      phone: this.phone,
      email: this.email
    }
  }

  clear(): void {
    this.payment = null;
    this.email = '';
    this.phone = '';
    this.address = '';
  }

  validate(): Partial<Record<keyof IBuyer, string>> {
    const errorMessage: Partial<Record<keyof IBuyer, string>> = {};

    if(!this.payment) errorMessage.payment = 'Не выбран вид оплаты';
    if(!this.email) errorMessage.email = 'Укажите емэйл';
    if(!this.phone) errorMessage.phone = 'Укажите телефон';
    if(!this.address) errorMessage.address = 'Укажите адрес';
    return errorMessage;
  }
}
