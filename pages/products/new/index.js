import ProductAddForm from '../../../src/components/product/ProductAddForm';

const NewProductPage = ({ products }) => {
  return <ProductAddForm categories={products} />;
};

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/products/categories`
  );
  const { products } = await response.json();
  return { props: { products }, revalidate: 60 };
};

export default NewProductPage;
