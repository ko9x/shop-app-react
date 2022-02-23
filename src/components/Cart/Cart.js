import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from 'react-redux';

const Cart = (props) => {

  const items = useSelector(state => state.items)

  const itemList = items.map(item => (
    <CartItem item={item} key={Math.random()}/>
  ))

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemList}
      </ul>
    </Card>
  );
};

export default Cart;
