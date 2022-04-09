import ProductCard from './ProductCard';

const ProductContainer = ({ products }) => {
  return (
    <div className="product_container">
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductContainer;
