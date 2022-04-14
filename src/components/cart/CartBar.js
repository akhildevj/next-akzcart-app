import { useState, useEffect } from 'react';
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
    console.log('quantity: ', quantity);
    if (props.changeTotalPrice) props.changeTotalPrice(quantity);
    if (!loading && authUser) {
      const options = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: Number(props.id), quantity }),
      };
      console.log(options);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/cart/${authUser.uid}`,
        options
      );

      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <div className="cart_bar">
      <div className="cart_bar_icon_div">
        <AiOutlineMinusCircle
          className="icon_medium icon_red cart_bar_icon"
          onClick={decreaseHandler}
        />
      </div>

      <div className="cart_bar_text">{quantity}</div>

      <div className="cart_bar_icon_div">
        <AiOutlinePlusCircle
          className="icon_medium icon_green cart_bar_icon"
          onClick={increaseHandler}
        />
      </div>
    </div>
  );
};

export default CartBar;
