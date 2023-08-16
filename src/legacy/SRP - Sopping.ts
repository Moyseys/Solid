// Foi refatorado em SRP

export class ShoppingCartLegacy {
  private readonly _itens: Product[] = [];
  private _order: 'closed' | 'open' = 'open';
  constructor() {}

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

  public checkout(): void {
    if (this._order === 'closed' || this.isEmpty()) {
      return console.log(
        'Não foi possível finalizar o pedido, pois seu carrinho está fechado ou não possui itens',
      );
    }

    this._order = 'closed';
    this.sendMessage('Seu pedido foi enviado');
    this.save();
    this.clear();
  }

  private clear(): void {
    this._itens.length = 0;
  }

  private sendMessage(msg: string): void {
    return console.log(msg);
  }

  private save(): void {
    return console.log('Seu pedido foi salvo');
  }

  private isEmpty(): boolean {
    return this._itens.length <= 0;
  }

  //Usando um Generic padrão do type script para retornar um obj com propriedades com readonly
  get item(): Readonly<Product[]> {
    return this._itens;
  }

  get order(): 'open' | 'closed' {
    return this.order;
  }
}

const cart = new ShoppingCartLegacy();
cart.addItem({ nome: 'mouse', price: 20 });
cart.addItem({ nome: 'Teclado', price: 250.5 });
cart.addItem({ nome: 'NoteBook', price: 3700 });

const total = cart.total();

console.log('Total: ' + total);
cart.checkout();

console.log(cart.item);
