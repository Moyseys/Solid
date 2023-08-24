import { Product } from './shoppingCart';

export default interface ShoppingCartProtocol {
  item: Readonly<Product[]>; //Aqui devemos referenciar o getter e não a propiedade _item pois ele possuí um getter
  get order(): 'open' | 'closed';
  addItem(item: Product): void;
  removeItem(index: number): void;
  total(): number;
  isEmpty(): boolean;
  clear(): void;
  applyDiscoutInTotal(): number;
}
