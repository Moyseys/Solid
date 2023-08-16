import Messaging from './services/messaging';
import OrderCart from './intities/order';
import Persistency from './services/persistency';
import ShoppingCart from './intities/shopping-cart';
import Products from './intities/products';

const cart = new ShoppingCart();
const persistency = new Persistency();
const messaging = new Messaging();
cart.addItem(new Products('mouse', 20));
cart.addItem(new Products('Teclado', 250.5));
cart.addItem(new Products('NoteBook', 3700));

const total = cart.total();

console.log('Total: ' + total);
const order = new OrderCart(cart, persistency, messaging);
order.checkout();

console.log(cart.item);
