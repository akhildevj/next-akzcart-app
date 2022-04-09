import Image from 'next/image';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { TiStarFullOutline } from 'react-icons/ti';
import { GrDeliver } from 'react-icons/gr';

const ProductCard = ({ product }) => {
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
        <p className="product_card_price">₹{product.price}</p>

        <div className="product_card_details_column">
          <p className="product_card_rating">
            {product.rating} <TiStarFullOutline className="icon_small" />
          </p>
          <div className="product_card_cart">
            <AiOutlineMinusCircle className="icon_medium icon_red product_card_cart_icon" />

            <div className="product_card_cart_text">8</div>

            <AiOutlinePlusCircle className="icon_medium icon_green product_card_cart_icon" />
          </div>
        </div>

        <p className="product_card_delivery">
          <GrDeliver className="icon_small" /> Free Delivery
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
