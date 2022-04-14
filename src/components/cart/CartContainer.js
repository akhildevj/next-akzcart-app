import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useAuth } from '../../context/authContext';
import Loader from '../UI/Loader';
import CartItem from './CartItem';
import { FaCashRegister } from 'react-icons/fa';
import { IoTrashBin } from 'react-icons/io5';
import { errorNotification, successNotification } from '../../shared/constants';
import { Store } from 'react-notifications-component';

const CartContainer = () => {
  const { loading, authUser } = useAuth();
  const [data, setData] = useState();
  const uid = authUser ? authUser.uid : '';

  const response = useSWR(`${process.env.NEXT_PUBLIC_URL}/cart/${uid}`, url =>
    fetch(url).then(res => res.json())
  );

  useEffect(() => {
    if (response.data) setData(response.data);
  }, [response]);

  const checkout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_URL}/order/${uid}`, {
        method: 'POST',
      });
      const notification = successNotification;
      notification.message = 'Succesfully Placed Order.';
      Store.addNotification(notification);
    } catch (err) {
      const notification = errorNotification;
      notification.message = 'Unable To Place The Order.';
      Store.addNotification(notification);
    }
  };

  const clearCart = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_URL}/cart/${uid}`, {
        method: 'DELETE',
      });
      const notification = successNotification;
      notification.message = 'Succesfully Cleared Cart.';
      Store.addNotification(notification);
    } catch (err) {
      const notification = errorNotification;
      notification.message = 'Unable To Clear The Cart.';
      Store.addNotification(notification);
    }
  };

  return !loading && authUser && data && data.cart ? (
    <div className="cart_container">
      {data.cart.map(cartItem => (
        <CartItem key={cartItem.id} cart={cartItem} />
      ))}
      <div className="cart_container_row">
        <button className="cart_container_button green" onClick={checkout}>
          <FaCashRegister className="button_small" /> Buy Now
        </button>
        <button className="cart_container_button red" onClick={clearCart}>
          <IoTrashBin className="button_small" />
          Clear Cart
        </button>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default CartContainer;
