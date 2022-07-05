import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { BsCartPlus, BsCartCheck } from 'react-icons/bs';

const ProductCardButton = ({ product }) => {
  const { loading, authUser } = useAuth();
  const [clicked, setClicked] = useState(false);

  const addToCart = async () => {
    setClicked(true);
    if (!loading && authUser) {
      const options = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
      };
      await fetch(
        `${process.env.NEXT_PUBLIC_URL}/cart/${authUser.uid}`,
        options
      );
    } else {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');

      const productExists = cart.findIndex(
        ({ id }) => id === Number(product.id)
      );

      if (productExists < 0) {
        cart.push({
          id: Number(product.id),
          imageUrl: product.imageUrl,
          name: product.name,
          price: product.price,
          productId: Number(product.id),
          quantity: 1,
        });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
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
