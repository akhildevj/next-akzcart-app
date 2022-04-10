import NavBar from '../src/components/UI/NavBar';
import { AuthProvider } from '../src/context/authContext';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import '../styles/styles.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <AuthProvider>
        <ReactNotifications />
        <NavBar /> <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
};

export default MyApp;
