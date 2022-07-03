import ProductCard from './ProductCard';

const Product = ({ products }) => {
  return (
    <div className='product'>
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Product;
