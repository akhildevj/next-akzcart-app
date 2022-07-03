import { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { useAuth } from '../../context/authContext';

const CartBar = props => {
  const { loading, authUser } = useAuth();

  const [quantity, setQuantity] = useState(props.quantity);

  const increaseHandler = () => {
    if (quantity == 99) return;
    setQuantity(quantity + 1);
    changeQuantity(quantity + 1);
  };

  const decreaseHandler = () => {
    if (quantity == 0) return;
    setQuantity(quantity - 1);
    changeQuantity(quantity - 1);
  };

  const changeQuantity = async quantity => {
    if (props.changeTotalPrice) props.changeTotalPrice(quantity);

    if (!loading && authUser) {
      const productId = props.cart ? props.product.productId : props.product.id;
      const options = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity }),
      };

      await fetch(
        `${process.env.NEXT_PUBLIC_URL}/cart/${authUser.uid}`,
        options
      );
    } else {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');

      const productExists = cart.findIndex(
        ({ id }) => id === Number(props.product.id)
      );

      if (productExists >= 0) {
        cart[productExists].quantity = quantity;
      } else {
        cart.push({
          id: Number(props.product.id),
          imageUrl: props.product.imageUrl,
          name: props.product.name,
          price: props.product.price,
          productId: Number(props.product.id),
          quantity,
        });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };

  return (
    <div className='cart-bar'>
      <AiOutlineMinusCircle className='icon' onClick={decreaseHandler} />
      <div className='cart-bar-text'>{quantity}</div>
      <AiOutlinePlusCircle className='icon' onClick={increaseHandler} />
    </div>
  );
};

export default CartBar;
