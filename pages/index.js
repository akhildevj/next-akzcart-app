import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import ProductContainer from '../src/components/product/ProductContainer';

const HomePage = props => {
  const [data, setData] = useState(props.data);

  const response = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/products?limit=4`,
    url => fetch(url).then(res => res.json())
  );

  useEffect(() => {
    if (response.data) setData(response.data);
  }, [response]);

  return (
    <div className="home_container">
      <div className="home_container_image">
        <Image
          src="/bg.jpeg"
          quality={100}
          alt="background"
          width="100%"
          height="30%"
          layout="responsive"
          objectFit="contain"
        />
      </div>

      <ProductContainer products={data.products} />
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/products?limit=4`
  );
  const data = await response.json();
  return { props: { data }, revalidate: 60 };
};

export default HomePage;
