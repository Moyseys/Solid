import { Product } from './interfaces/shppingCart';

export default class Products implements Product {
  constructor(
    public nome: string,
    public price: number,
  ) {}
}
