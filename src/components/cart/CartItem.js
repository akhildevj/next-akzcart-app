import Image from 'next/image';
import { useState } from 'react';
import CartBar from './CartBar';

const CartItem = ({ cart }) => {
  const [total, setTotal] = useState(cart.quantity * cart.price);

  const changeTotalPrice = quantity => {
    setTotal(quantity * cart.price);
  };

  return (
    <div className='cart_item'>
      <Image
        className='cart_item_image'
        alt={cart.name}
        src={cart.imageUrl}
        width={75}
        height={75}
        quality={75}
      />
      <div className='cart_item_column'>
        <p className='cart_item_name'>{cart.name}</p>
        <p className='cart_item_price'>₹{cart.price}</p>
      </div>
      <CartBar
        cart={true}
        product={cart}
        quantity={cart.quantity}
        changeTotalPrice={changeTotalPrice}
      />
      <p className='cart_item_total'>₹{total}</p>
    </div>
  );
};

export default CartItem;
