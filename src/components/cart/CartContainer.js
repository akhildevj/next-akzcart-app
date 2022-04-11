import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useAuth } from '../../context/authContext';
import Loader from '../UI/Loader';
import CartItem from './CartItem';

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

  return !loading && authUser && data && data.cart ? (
    <div className="cart_container">
      {data.cart.map(cartItem => (
        <CartItem key={cartItem.id} cart={cartItem} />
      ))}
    </div>
  ) : (
    <Loader />
  );
};

export default CartContainer;
