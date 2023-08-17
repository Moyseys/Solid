import { Product } from './interfaces/shppingCart';
import { ApplyDiscount } from '../services/discount';

export default class ShoppingCart {
  private readonly _itens: Product[] = [];
  //injeção de dependencias
  constructor(private discout: ApplyDiscount) {}

  public addItem(item: Product): void {
    this._itens.push(item);
  }

  public removeItem(index: number): void {
    this._itens.splice(index, 1);
  }

  public total(): number {
    const total = +this._itens
      .reduce((ac, item) => ac + item.price, 0)
      .toFixed(2);

    return total;
  }

  public isEmpty(): boolean {
    return this._itens.length <= 0;
  }

  public clear(): void {
    this._itens.length = 0;
  }

  public applyDiscoutInTotal(): number {
    return this.discout.apply(this.total());
  }

  //Usando um Generic padrão do type script para retornar um obj com propriedades com readonly
  get item(): Readonly<Product[]> {
    return this._itens;
  }

  get order(): 'open' | 'closed' {
    return this.order;
  }
}
