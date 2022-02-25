import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { id, title, quantity, total, price } = props.item;

  const addQuantityHandler = () => {
    dispatch(cartActions.addQuantity({id: id}));
  }
  const subtractQuantityHandler = () => {
    dispatch(cartActions.subtractQuantity({id: id}));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={subtractQuantityHandler} >-</button>
          <button onClick={addQuantityHandler} >+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
