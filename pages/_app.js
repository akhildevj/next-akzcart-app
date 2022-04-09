import NavBar from '../src/components/UI/NavBar';
import '../styles/styles.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <NavBar /> <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
