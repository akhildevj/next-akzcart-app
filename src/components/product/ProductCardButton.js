import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { BsCartPlus, BsCartCheck } from 'react-icons/bs';

const ProductCardButton = ({ id }) => {
  const { loading, authUser } = useAuth();
  const [clicked, setClicked] = useState(false);

  const addToCart = async () => {
    setClicked(true);
    if (!loading && authUser) {
      const options = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: id, quantity: 1 }),
      };
      await fetch(
        `${process.env.NEXT_PUBLIC_URL}/cart/${authUser.uid}`,
        options
      );
    }
  };

  return (
    <div>
      <button
        onClick={addToCart}
        className={
          clicked
            ? 'btn product-card--button clicked'
            : 'btn product-card--button'
        }
      >
        <div className='svg-wrapper-1'>
          <div className='svg-wrapper'>
            {clicked ? <BsCartCheck /> : <BsCartPlus />}
          </div>
        </div>
        <span>{clicked ? 'Added' : 'Add to Cart'}</span>
      </button>
    </div>
  );
};

export default ProductCardButton;
