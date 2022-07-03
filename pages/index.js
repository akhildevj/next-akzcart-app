import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Home from '../src/components/home/home';

const url = `${process.env.NEXT_PUBLIC_URL}/products?limit=5`;

const HomePage = props => {
  const [data, setData] = useState(props.data);
  const response = useSWR(url, url => fetch(url).then(res => res.json()));

  useEffect(() => {
    if (response.data) setData(response.data);
  }, [response]);

  return <Home products={data.products} />;
};

export const getStaticProps = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return { props: { data }, revalidate: 60 };
};

export default HomePage;
