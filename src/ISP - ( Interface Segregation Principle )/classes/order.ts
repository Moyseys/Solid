import { Order } from './interfaces/shppingCart';
import Messaging from '../services/messaging';
import Persistency from '../services/persistency';
import ShoppingCart from './shopping-cart';

export default class OrderCart {
  private _order: Order = 'open';
  constructor(
    private readonly cart: ShoppingCart,
    private readonly persistency: Persistency,
    private readonly messaging: Messaging,
  ) {} //aqui recebo uma instancia da classe ShoppingCart

  public checkout(): void {
    if (this._order === 'closed' || this.cart.isEmpty()) {
      return console.log(
        'Não foi possível finalizar o pedido, pois seu carrinho está fechado ou não possui itens',
      );
    }

    this._order = 'closed';
    this.messaging.sendMessage('Seu pedido foi enviado');
    this.persistency.save();
    this.cart.clear();
  }
}
