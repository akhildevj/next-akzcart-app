import { FcCalendar } from 'react-icons/fc';
import OrderdDetailsItem from './OrderDetailsItem';

const OrderDetails = ({ order }) => {
  console.log(order);
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
    <section className='order-details'>
      <p className='order-details--title'>Order Details</p>

      <div className='order-details--container'>
        <p className='order-details--number'>
          Order Number <span>#{order.orderedAt}</span>
        </p>

        <p className='order-details--price'>₹{order.totalPrice}</p>

        <p className='order-details--date'>
          <FcCalendar />
          {date}
        </p>

        <div className='order-details--products'>
          {order.cart.map((cartItem, index) => (
            <OrderdDetailsItem key={index} cart={cartItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
