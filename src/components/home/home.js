import Image from 'next/image';
import Product from '../product/Product';
import { IoIosBasket } from 'react-icons/io';

const Home = ({ products }) => {
  return (
    <div className='home'>
      <picture className='home--image'>
        <Image
          src='/bg.jpg'
          quality={100}
          alt='background'
          width='100%'
          height='25%'
          layout='responsive'
          objectFit='contain'
        />
        <div className='home--header'>
          <h1 className='home--header-title'>AkzCart</h1>
          <button className='btn home--header-button'>
            <div className='svg-wrapper-1'>
              <div className='svg-wrapper'>
                <IoIosBasket />
              </div>
            </div>
            <span>Shop Now</span>
          </button>
        </div>
      </picture>

      <Product products={products} />
    </div>
  );
};

export default Home;
