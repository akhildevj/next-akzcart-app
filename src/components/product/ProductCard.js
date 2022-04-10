import { useState } from 'react';
import Image from 'next/image';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { TiStarFullOutline } from 'react-icons/ti';
import { GrDeliver } from 'react-icons/gr';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseHandler = () => {
    if (quantity == 99) return;
    setQuantity(quantity + 1);
  };

  const decreaseHandler = () => {
    if (quantity == 0) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className="product_card">
      <Image
        className="product_card_image"
        alt={product.name}
        src={product.imageUrl}
        width={250}
        height={250}
        quality={75}
      />
      <div className="product_card_details">
        <p className="product_card_name">{product.name}</p>

        <div className="product_card_details_column">
          <p className="product_card_price">₹{product.price}</p>

          <p className="product_card_rating">
            {product.rating} <TiStarFullOutline className="icon_small" />
          </p>
        </div>

        <div className="product_card_details_column">
          <p className="product_card_delivery">
            <GrDeliver className="icon_small" /> Free Delivery
          </p>

          <div className="product_card_cart">
            <AiOutlineMinusCircle
              className="icon_medium icon_red product_card_cart_icon"
              onClick={decreaseHandler}
            />
            <div className="product_card_cart_text">{quantity}</div>
            <AiOutlinePlusCircle
              className="icon_medium icon_green product_card_cart_icon"
              onClick={increaseHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
