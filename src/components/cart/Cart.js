import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useAuth } from '../../context/authContext';
import Loader from '../UI/Loader';
import CartItem from './CartItem';
import { errorNotification, successNotification } from '../../shared/constants';
import { Store } from 'react-notifications-component';
import CartButton from './cartButton';

const Cart = () => {
  const { loading, authUser } = useAuth();
  const [cart, setCart] = useState();
  const uid = authUser ? authUser.uid : '';

  const { data } = useSWR(`${process.env.NEXT_PUBLIC_URL}/cart/${uid}`, url =>
    fetch(url).then(res => res.json())
  );

  const checkout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_URL}/order/${uid}`, {
        method: 'POST',
      });
      const notification = successNotification;
      notification.message = 'Succesfully Placed Order.';
      Store.addNotification(notification);
      setCart([]);
      localStorage.setItem('cart', []);
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
      setCart([]);
      localStorage.setItem('cart', []);
    } catch (err) {
      const notification = errorNotification;
      notification.message = 'Unable To Clear The Cart.';
      Store.addNotification(notification);
    }
  };

  const changeCart = async (productId, quantity) => {
    if (!loading && authUser) {
      const options = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity }),
      };
      await fetch(
        `${process.env.NEXT_PUBLIC_URL}/cart/${authUser.uid}`,
        options
      );

      localStorage.setItem('cart', []);
    }
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (data && data.cart && data.cart.length) {
      if (cart.length) {
        cart.map(({ id: productId, quantity }) => {
          changeCart(productId, quantity);
        });
      }
      setCart(data.cart);
    } else setCart(cart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return cart ? (
    <div className='cart'>
      {cart.length ? (
        <div className='cart--container'>
          <h1 className='cart--container--heading'>Your Cart</h1>
          {cart.map(cartItem => (
            <CartItem key={cartItem.id} cart={cartItem} />
          ))}
          <CartButton checkout={checkout} clearCart={clearCart} />
        </div>
      ) : (
        <h1 className='cart--container--heading'>Cart Empty</h1>
      )}
    </div>
  ) : (
    <Loader />
  );
};

export default Cart;
