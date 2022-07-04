import Image from 'next/image';
import RatingBar from '../rating/Rating';

const OrderdDetailsItem = ({ cart }) => {
  return (
    <div className='order-details-item'>
      <Image
        className='order-details-item--image'
        alt={cart.name}
        src={cart.imageUrl}
        width={75}
        height={75}
        quality={75}
      />
      <p className='order-details-item--name'>{cart.name}</p>
      <p className='order-details-item--price'>₹{cart.price}</p>
      <p className='order-details-item--quantity'>x{cart.quantity}</p>
      <p className='order-details-item--total'>₹{cart.quantity * cart.price}</p>
      <RatingBar id={cart.productId} rating={cart.rating} />
    </div>
  );
};

export default OrderdDetailsItem;
