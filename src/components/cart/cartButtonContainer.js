import { FaCashRegister } from 'react-icons/fa';
import { IoTrashBin } from 'react-icons/io5';

const CartButtonContainer = ({ checkout, clearCart }) => {
  return (
    <div className='cart_container_row'>
      <button className='cart_container_button green' onClick={checkout}>
        <FaCashRegister className='button_small' />
        Buy Now
      </button>

      <button className='cart_container_button red' onClick={clearCart}>
        <IoTrashBin className='button_small' />
        Clear Cart
      </button>
    </div>
  );
};

export default CartButtonContainer;
