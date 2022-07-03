import Image from 'next/image';
import { TiStarFullOutline } from 'react-icons/ti';
import { GrDeliver } from 'react-icons/gr';
import ProductCardButton from './ProductCardButton';

const ProductCard = ({ product }) => {
  return (
    <div className='product-card'>
      <div className='product-card-head'>
        <picture>
          <Image
            className='product-card--image'
            alt={product.name}
            src={product.imageUrl}
            width={225}
            height={225}
            quality={75}
          />
        </picture>

        <p className='product-card--rating'>
          {product.rating} <TiStarFullOutline className='icon' />
        </p>

        <p className='product-card--delivery'>
          <GrDeliver className='icon' />
          Free Delivery
        </p>
      </div>

      <div className='product-card--details'>
        <p className='product-card--name'>{product.name}</p>
        <p className='product-card--price'>₹{product.price}</p>
        <ProductCardButton id={product.id} />
      </div>
    </div>
  );
};

export default ProductCard;
