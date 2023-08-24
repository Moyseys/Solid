import { Order } from './interfaces/shoppingCart';
import MessagingProtocol from './interfaces/messagingProtocol';
import PersistencyProtocol from './interfaces/PersistencyProtocol';
import ShoppingCartProtocol from './interfaces/shoppingCartProtocol';

export default class OrderCart {
  private _order: Order = 'open';
  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly messaging: MessagingProtocol,
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
