import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Product from '../../src/components/product/Product';

const Products = props => {
  const [data, setData] = useState(props.data);

  const response = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/products?limit=8`,
    url => fetch(url).then(res => res.json())
  );

  useEffect(() => {
    if (response.data) setData(response.data);
  }, [response]);

  return <Product products={data.products} />;
};

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/products?limit=8`
  );
  const data = await response.json();
  return { props: { data }, revalidate: 60 };
};

export default Products;
