import { Product } from './interfaces/shoppingCart';

export default class Products implements Product {
  constructor(
    public nome: string,
    public price: number,
  ) {}
}
