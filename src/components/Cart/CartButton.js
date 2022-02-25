import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store';

const CartButton = (props) => {

  const cartAmount = useSelector(state => state.totalQuantity);
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(cartActions.toggleCart())
  };

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default CartButton;
