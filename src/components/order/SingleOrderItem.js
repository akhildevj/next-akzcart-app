import { FcCalendar } from 'react-icons/fc';
import OrderItemCart from './OrderItemCart';

const SingleOrderItem = ({ order }) => {
  const options = {
    timeZone: 'Asia/Kolkata',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  const date = new Date(order.orderedAt).toLocaleString('en-US', options);

  return (
    <div className="single_order_item">
      <p className="single_order_item_title">Order Details</p>

      <p className="single_order_item_date">
        <FcCalendar />
        Ordered At:
        {date}
      </p>

      <p className="single_order_item_price">
        Total Amount: ₹{order.totalPrice}
      </p>

      {order.cart.map((cartItem, index) => (
        <OrderItemCart key={index} cart={cartItem} />
      ))}
    </div>
  );
};

export default SingleOrderItem;
