import ProductAddForm from '../../../src/components/product/ProductAddForm';
import Loader from '../../../src/components/UI/Loader';
import { useAuth } from '../../../src/context/authContext';

const NewProductPage = ({ categories }) => {
  const { loading, authUser } = useAuth();

  return !loading && authUser ? (
    <ProductAddForm categories={categories} />
  ) : (
    <Loader />
  );
};

export const getStaticProps = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/products/categories`
  );
  const { categories } = await response.json();
  return { props: { categories }, revalidate: 60 };
};

export default NewProductPage;
