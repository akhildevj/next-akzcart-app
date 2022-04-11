import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useAuth } from '../../../src/context/authContext';
import ProductContainer from '../../../src/components/product/ProductContainer';
import Loader from '../../../src/components/UI/Loader';

const AdminProductsPage = () => {
  const { authUser } = useAuth();
  const [data, setData] = useState([]);
  const uid = authUser ? authUser.uid : '';

  const response = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/products/admin/${uid}`,
    url => fetch(url).then(res => res.json())
  );

  useEffect(() => {
    if (response.data) setData(response.data);
  }, [response]);

  return (
    <div>
      {data.products ? (
        <ProductContainer products={data.products} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AdminProductsPage;
