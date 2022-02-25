import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';

const Cart = (props) => {

  const items = useSelector(state => state.items)

  const cartTotal = items.map(item => (
    item.total  
  ));

  const sum = cartTotal.reduce((partialSum, a) => partialSum + a, 0);

  const itemList = items.map(item => (
    <CartItem item={item} key={Math.random()}/>
  ));


  return (
    <Card className={classes.cart}>
      {itemList.length > 0 && <h2>Your Shopping Cart</h2>}
      {itemList.length === 0 && <h2>Your Shopping Cart Is Empty</h2>}
      <ul>
        {itemList}
      </ul>
      {itemList.length > 0 && <div><h3>Cart Total </h3><p className={classes.total}>${sum.toFixed(2)}</p></div>}
    </Card>
  );
};

export default Cart;
