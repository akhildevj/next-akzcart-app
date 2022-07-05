import NavBar from '../src/components/UI/NavBar';
import { AuthProvider } from '../src/context/authContext';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import '../styles/globals.css';
import '../styles/styles.scss';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>AkzCart</title>
      </Head>
      <AuthProvider>
        <ReactNotifications />
        <NavBar /> <Component {...pageProps} />
      </AuthProvider>
    </>
  );
};

export default MyApp;
