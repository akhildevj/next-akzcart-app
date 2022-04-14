import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import NavItem from './NavItem';

const NavBar = () => {
  const { authUser, loading, signOut } = useAuth();

  const router = useRouter();
  const [active, setActive] = useState('Home');

  useEffect(() => {
    if (router.pathname === '/') setActive('Home');
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

  return (
    <div className="navBar">
      <p className="navBar_logo">AkzKart</p>
      <div className="navBar_container">
        <span>{active}</span>
        <NavItem name="Home" route="/" active={active} setActive={setActive} />

        <NavItem
          name="Products"
          route="/products"
          active={active}
          setActive={setActive}
        />

        <NavItem
          name="Cart"
          route="/cart"
          active={active}
          setActive={setActive}
        />

        {!loading && authUser ? (
          <>
            <NavItem
              name="New Product"
              route="/products/new"
              active={active}
              setActive={setActive}
            />

            <NavItem
              name="Admin Products"
              route="/products/admin"
              active={active}
              setActive={setActive}
            />

            <NavItem
              name="Orders"
              route="/orders"
              active={active}
              setActive={setActive}
            />

            <button onClick={signOutHandler}>Logout</button>
          </>
        ) : (
          <NavItem
            name="Login"
            route="/login"
            active={active}
            setActive={setActive}
          />
        )}
      </div>
    </div>
  );
};

export default NavBar;
