import { FcCalendar } from 'react-icons/fc';
import OrderItemCart from './OrderItemCart';

const OrderItem = ({ order }) => {
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

  const products = order.cart.map(({ id, name, quantity }) => {
    return { id, name, quantity };
  });

  return (
    <div className="order_item">
      <div className="order_item_row">
        <p className="order_item_date">
          <FcCalendar />
          Ordered At: {date}
        </p>
        <p className="order_item_price">Total Amount: ₹{order.totalPrice}</p>
        <div className="order_item_products">
          {products.map(({ id, name, quantity }) => (
            <p key={`${order.id}_${id}`} className="order_item_products_card">
              {name} x {quantity}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
