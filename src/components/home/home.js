import ProductContainer from '../product/ProductContainer';
import Image from 'next/image';

const Home = ({ products }) => {
  return (
    <div className="home_container">
      <div className="home_container_image">
        <Image
          src="/bg.jpeg"
          quality={100}
          alt="background"
          width="100%"
          height="25%"
          layout="responsive"
          objectFit="contain"
        />
      </div>

      <ProductContainer products={products} />
    </div>
  );
};

export default Home;
