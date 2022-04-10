import ProductAddForm from '../../../src/components/product/ProductAddForm';

const NewProductPage = ({ categories }) => {
  return <ProductAddForm categories={categories} />;
};

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/products/categories`
  );
  const { categories } = await response.json();
  return { props: { categories }, revalidate: 60 };
};

export default NewProductPage;
