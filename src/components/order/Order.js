import Loader from '../UI/Loader';
import OrderItem from './OrderItem';
import OrderLink from './OrderLink';

const Order = ({ orders }) => {
  return orders ? (
    <div className='order'>
      {orders.map(order => (
        <OrderLink key={order.id} link={`/orders/${order.id}`}>
          <OrderItem key={order.id} order={order} />
        </OrderLink>
      ))}
    </div>
  ) : (
    <Loader />
  );
};

export default Order;
