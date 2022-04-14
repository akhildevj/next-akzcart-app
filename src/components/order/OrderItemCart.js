import Image from 'next/image';
import RatingBar from '../rating/Rating';

const OrderItemCart = ({ cart }) => {
  return (
    <div className="order_item_cart">
      <Image
        className="order_item_cart_image"
        alt={cart.name}
        src={cart.imageUrl}
        width={75}
        height={75}
        quality={75}
      />
      <div className="order_item_cart_column">
        <p className="order_item_cart_name">{cart.name}</p>
        <p className="order_item_cart_price">₹{cart.price}</p>
      </div>
      <p className="order_item_cart_quantity">x{cart.quantity}</p>
      <p className="order_item_cart_total">₹{cart.quantity * cart.price}</p>
      <RatingBar id={cart.productId} rating={cart.rating} />
    </div>
  );
};

export default OrderItemCart;
