import { FaCashRegister } from 'react-icons/fa';
import { IoTrashBin } from 'react-icons/io5';

const CartButton = ({ checkout, clearCart }) => {
  return (
    <div className='cart-button--container'>
      <button
        className='btn cart-button cart-button--checkout'
        onClick={checkout}
      >
        <div className='svg-wrapper-1'>
          <div className='svg-wrapper'>
            <FaCashRegister />
          </div>
        </div>
        <span>Buy Now</span>
      </button>

      <button
        className='btn cart-button cart-button--clear'
        onClick={clearCart}
      >
        <div className='svg-wrapper-1'>
          <div className='svg-wrapper'>
            <IoTrashBin />
          </div>
        </div>
        <span> Clear Cart</span>
      </button>
    </div>
  );
};

export default CartButton;
