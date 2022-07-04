import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useAuth } from '../../src/context/authContext';
import Loader from '../../src/components/UI/Loader';
import OrderDetails from '../../src/components/order/OrderDetails';

const SingleOrderPage = ({ id }) => {
  const { loading, authUser } = useAuth();
  const [order, setOrder] = useState();
  const uid = authUser ? authUser.uid : '';

  const URL = `${process.env.NEXT_PUBLIC_URL}/order/${uid}/${id}`;
  const { data } = useSWR(uid ? URL : null, url =>
    fetch(url).then(res => res.json())
  );

  useEffect(() => {
    if (data && data.order) setOrder(data.order);
  }, [data]);

  return !loading && order ? <OrderDetails order={data.order} /> : <Loader />;
};

export const getServerSideProps = async context => {
  const { id } = context.params;
  return { props: { id } };
};

export default SingleOrderPage;
