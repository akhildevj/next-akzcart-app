import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useAuth } from '../../../src/context/authContext';
import Loader from '../../../src/components/UI/Loader';
import Product from '../../../src/components/product/Product';

const AdminProductsPage = () => {
  const { loading, authUser } = useAuth();
  const [data, setData] = useState([]);
  const uid = authUser ? authUser.uid : '';

  const response = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/products/admin/${uid}`,
    url => fetch(url).then(res => res.json())
  );

  useEffect(() => {
    if (response.data) setData(response.data);
  }, [response]);

  return !loading && authUser && data.products ? (
    <Product products={data.products} />
  ) : (
    <Loader />
  );
};

export default AdminProductsPage;
