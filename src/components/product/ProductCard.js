import Image from 'next/image';
import { TiStarFullOutline } from 'react-icons/ti';
import { GrDeliver } from 'react-icons/gr';
import CartBar from '../cart/CartBar';

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
          <CartBar product={product} quantity={0} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
