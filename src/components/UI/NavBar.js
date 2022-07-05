import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import NavItem from './NavItem';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';

const NavBar = () => {
  const { authUser, loading, signOut } = useAuth();
  const [clicked, setClicked] = useState(false);

  const router = useRouter();
  const [active, setActive] = useState('AkzKart');

  useEffect(() => {
    if (router.pathname === '/') setActive('AkzKart');
    if (router.pathname === '/login') {
      if (!loading) {
        if (authUser) router.push('/');
        else setActive('Login');
      }
    }

    if (router.pathname === '/products') setActive('Products');
    if (router.pathname === '/products/new') {
      if (!loading) {
        if (authUser) setActive('New Product');
        else router.push('/login');
      }
    }
    if (router.pathname === '/products/admin') {
      if (!loading) {
        if (authUser) setActive('Admin Products');
        else router.push('/login');
      }
    }

    if (router.pathname === '/cart') setActive('Cart');

    if (router.pathname === '/orders') {
      if (!loading) {
        if (authUser) setActive('Orders');
        else router.push('/login');
      }
    }
  }, [authUser, loading, router, setActive]);

  const signOutHandler = () => {
    signOut();
    router.push('/');
  };

  const toggle = () => setClicked(!clicked);

  return (
    <header className={clicked ? 'nav-bar nav-open' : 'nav-bar'}>
      <div className='nav-bar--logo'>
        <NavItem
          name='AkzKart'
          route='/'
          active={active}
          setActive={setActive}
        />
      </div>

      <nav className='nav-bar--container'>
        <NavItem
          name='Products'
          route='/products'
          active={active}
          setActive={setActive}
        />

        <NavItem
          name='Cart'
          route='/cart'
          active={active}
          setActive={setActive}
        />

        {!loading && authUser ? (
          <>
            <NavItem
              name='New Product'
              route='/products/new'
              active={active}
              setActive={setActive}
            />

            <NavItem
              name='Admin Products'
              route='/products/admin'
              active={active}
              setActive={setActive}
            />

            <NavItem
              name='Orders'
              route='/orders'
              active={active}
              setActive={setActive}
            />

            <button className='nav-button' onClick={signOutHandler}>
              Logout
            </button>
          </>
        ) : (
          <NavItem
            name='Login'
            route='/login'
            active={active}
            setActive={setActive}
          />
        )}
      </nav>

      <button className='nav-bar--mobile' onClick={() => setClicked(!clicked)}>
        <HiMenu className='nav-bar--mobile-menu' />
        <IoMdClose className='nav-bar--mobile-close' />
      </button>
    </header>
  );
};

export default NavBar;
