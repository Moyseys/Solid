import Messaging from './services/messaging';
import OrderCart from './classes/order';
import Persistency from './services/persistency';
import ShoppingCart from './classes/shopping-cart';
import Products from './classes/products';
import { PercentDiscount } from './services/discount';

const discount = new PercentDiscount(0.5);

const cart = new ShoppingCart(discount);
const persistency = new Persistency();
const messaging = new Messaging();

cart.addItem(new Products('mouse', 200));
cart.addItem(new Products('Teclado', 100));
cart.addItem(new Products('NoteBook', 3000));

const total = cart.total();
const totalWithDiscout = cart.applyDiscoutInTotal();

console.log('Total: ' + total);
console.log('Total com desconto: ' + totalWithDiscout);
const order = new OrderCart(cart, persistency, messaging);
order.checkout();

console.log(cart.item);
