import Image from 'next/image';
import { useState } from 'react';
import CartBar from './CartBar';

const CartItem = ({ cart }) => {
  const [total, setTotal] = useState(cart.quantity * cart.price);

  const changeTotalPrice = quantity => {
    setTotal(quantity * cart.price);
  };

  return (
    <div className='cart-item'>
      <Image
        alt={cart.name}
        src={cart.imageUrl}
        width={75}
        height={75}
        quality={75}
      />
      <p className='cart-item--name'>{cart.name}</p>
      <p className='cart-item--price'>₹{cart.price}</p>

      <CartBar
        cart={true}
        product={cart}
        quantity={cart.quantity}
        changeTotalPrice={changeTotalPrice}
      />
      <p className='cart-item--total'>₹{total}</p>
    </div>
  );
};

export default CartItem;
