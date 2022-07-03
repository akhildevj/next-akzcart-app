import Image from 'next/image';
import Product from '../product/Product';

const Home = ({ products }) => {
  return (
    <div className='home'>
      <picture className='home-image'>
        <Image
          src='/bg.jpeg'
          quality={100}
          alt='background'
          width='100%'
          height='25%'
          layout='responsive'
          objectFit='contain'
        />
      </picture>

      <Product products={products} />
    </div>
  );
};

export default Home;
