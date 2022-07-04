import { FcCalendar } from 'react-icons/fc';

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
  const products = order.cart.map(({ name, quantity }) => ({ name, quantity }));

  return (
    <div className='order-item'>
      <p className='order-item--number'>
        Order Number <span>#{order.orderedAt}</span>
      </p>

      <p className='order-item--price'>₹{order.totalPrice}</p>

      <p className='order-item--date'>
        <FcCalendar />
        {date}
      </p>

      <div className='order-item--products'>
        {products.map(({ name, quantity }, index) => (
          <p key={index} className='order-item--products-card'>
            {name} x {quantity}
          </p>
        ))}
      </div>
    </div>
  );
};

export default OrderItem;
